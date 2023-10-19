import express from "express";
import { addToCart, getAllCart, removeCartItem } from "../controllers/cart.js";

const router = express.Router();

router.get('/', getAllCart)
router.post('/add', addToCart)
router.post('/delete', removeCartItem)

export default router