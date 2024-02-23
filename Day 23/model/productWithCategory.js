import mongoose from "mongoose";
import Category from "./categoryModel.js"

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
});

const ProductWithCategory = mongoose.model("ProductWithCategory", productSchema);

export default ProductWithCategory;
