import ProductWithCategory from "../model/productWithCategory.js"


async function getProductsPopulatedWithCategory(req, res) {
    try {
        const products = await ProductWithCategory.find({}).populate("category");
        res.send(products)
    } catch (error) {
        console.error("Error while populating products with category:", error);
        throw error;
    }
}

async function addProductsWithCategory(req, res) {
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

export { getProductsPopulatedWithCategory, addProductsWithCategory };