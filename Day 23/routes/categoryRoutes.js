import express from "express"

import { addCategory, getCategories } from "../controllers/categoryController.js"

const router = express.Router()

router.post("/addCategory", addCategory)
router.get("/getCategory", getCategories)

export default router