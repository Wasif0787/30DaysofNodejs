import Product from "../model/productModel.js"

async function createProduct(req, res) {
    try {
        const { name, price, quantity } = req.body
        const newProduct = new Product({
            name,
            price,
            quantity
        }
        )
        await newProduct.save()
        res.send(newProduct)
        console.log("product added to database");
        console.log(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(`Error in creating Product : ${error.message}`);
    }
}

async function getAllProducts(req, res) {
    try {
        const products = await Product.find({})
        res.send(products)
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log("error in getting all products");
    }
}

async function updateProduct(req, res) {
    try {
        const { productId, name, price, quantity } = req.body
        let product = await Product.findById(productId)
        if (!product) return res.status(400).json({ error: "Product not found" });
        product.name = name || product.name;
        product.price = price || product.price
        product.quantity = quantity || product.quantity
        product = await product.save()
        console.log("Product updated successfully");
        res.send(product)
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(`Error updating product`);
    }
}

async function deleteProduct(req, res) {
    try {
        const productId = req.body.productId;
        const product = await Product.findById(productId)
        if (!product) res.status(404).json({ error: "Product not found" })
        await Product.findByIdAndDelete(productId)
        console.log("Product Deleted Successfully");
        res.status(200).send("product deleted", product)
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log("Error deleting product");
    }
}
export { createProduct, getAllProducts, updateProduct, deleteProduct }