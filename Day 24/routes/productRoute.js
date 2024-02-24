import express from "express"

import { getAllProductsRoute, updateProductRoute, deleteProductRoute, createProductRoute } from "../controllers/productController.js"

const router = express.Router()

router.post("/createProduct", createProductRoute)
router.get("/getAllProducts", getAllProductsRoute)
router.put("/updateProduct", updateProductRoute)
router.delete("/deleteProduct", deleteProductRoute)

export default router