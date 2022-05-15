import Cart from '../Models/Cart.js'

export const getCarts = (async(req, res) => {
    try {
        const items = await Cart.find({});
        return res.status(200).send(items);
    } catch (error) {
        return res.status(500).send(error);
    }
});

export const getCartItem = (async(req, res)=>{
    try {
        const item = await Cart.findById({ _id: req.params.id }).populate({
            path: "customer",
            select: "-password",
          })
          .populate({
              path: "item"
          });
        if(!item) return res.status(404).send("Cart item not found");
        return res.status(200).send(item);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});


export const createCartItem = (async(req, res)=>{
    try {
        let item = new Cart({...req.body});
        item = await item.save();
        return res.status(201).send(item);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//update a cart item
export const updateCartItem = (async(req, res)=>{
    try {
        const item = await Cart.findById({ _id: req.params.id });
        if(!item) return res.status(404).send("Cart Item not found");
        await Cart.updateOne({ _id: item._id }, {...req.body});
        return res.status(200).send("Cart Item Updated");

    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//delete a cart item
export const deleteProduct = (async(req, res)=>{
    try {
        const item = await Cart.findById({ _id: req.params.id });
        if(!item) return res.status(404).send("Cart Item not found");
        await item.remove()
        return res.status(200).send("Cart Item Removed");

    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});