import express from "express"
import { createProduct, getAllProducts, updateProduct, deleteProduct } from "../controllers/productController.js"

const router = express.Router()

router.post("/createProduct", createProduct)
router.get("/getAllProducts", getAllProducts)
router.put("/updateProduct", updateProduct)
router.delete("/deleteProduct", deleteProduct)

export default router