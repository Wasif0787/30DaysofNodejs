import express from "express"

import { getProductsPopulatedWithCategory, addProductsWithCategory } from "../controllers/productController.js"

const router = express.Router()

router.get("/getproducts", getProductsPopulatedWithCategory)
router.post("/addProducts", addProductsWithCategory)

export default router