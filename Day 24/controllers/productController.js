import ProductWithCategory from "../models/productWithCategory.js"

async function createProductRoute(req, res) {
    try {
        const { name, price, quantity, categoryId } = req.body;
        const newProduct = new ProductWithCategory({
            name,
            price,
            quantity,
            category: categoryId
        })
        await newProduct.save();
        res.status(201).json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.error("Error in creating product:", error);
    }
}

async function getAllProductsRoute(req, res) {
    try {
        const products = await ProductWithCategory.find({}).populate("category");
        res.send(products)
    } catch (error) {
        console.error("Error while populating products with category:", error);
        throw error;
    }
}

async function updateProductRoute(req, res) {
    try {
        const { productId, name, price, quantity, categoryId } = req.body
        let product = await ProductWithCategory.findById(productId)
        if (!product) return res.status(400).json({ error: "Product not found" });
        product.name = name || product.name;
        product.price = price || product.price
        product.quantity = quantity || product.quantity
        product.categoryId = categoryId || product.categoryId
        product = await product.save()
        console.log("Product updated successfully");
        res.send(product)
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(`Error updating product`);
    }
}

async function deleteProductRoute(req, res) {
    try {
        const productId = req.body.productId;
        const product = await ProductWithCategory.findById(productId)
        if (!product) res.status(404).json({ error: "Product not found" })
        await ProductWithCategory.findByIdAndDelete(productId)
        console.log("Product Deleted Successfully");
        res.status(200).json({ message: "Product deleted successfully", deletedProduct: product });
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log("Error deleting product");
    }
}

export { createProductRoute, getAllProductsRoute, updateProductRoute, deleteProductRoute }
