import mongoose from 'mongoose';

const CartScheme = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  items: [
      {
          itemId: {
            type: String,
            required: true,
          },
          unitPrice: {
              type: Number,
              required: true,
          },
          qty: {
            type: Number,
            required: true,
          },
      }
  ],
  price: {
    type: Number,
    required: true,
  },
});

const Event = mongoose.model('Cart', CartScheme);

export default Event;
