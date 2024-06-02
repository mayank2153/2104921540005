import { Router } from "express";
import { getProductByCategory,getAllProducts } from "../controllers/products.controller.js";


const router = Router()


router.route("/products/:category").get(getProductByCategory)
export default router