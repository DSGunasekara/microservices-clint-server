import express from "express";
const router = express.Router();

import {
  getCarts,
  createCartItem,
  deleteProduct,
  updateCartItem,
  getCartItem
} from '../Controllers/CartController.js';

router.get("/", getCarts);
router.get("/:id", getCartItem);
router.post('/', createCartItem);
router.patch('/:id', updateCartItem);
router.delete('/:id', deleteProduct);

export default router;
