import Category from "../model/categoryModel.js"

async function addCategory(req, res) {
    try {
        const { name } = req.body;
        const newCategory = new Category({ name });
        await newCategory.save();
        res.status(201).json({ message: "Category created successfully", category: newCategory });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.error("Error in creating category:", error);
    }
}

async function getCategories(req, res) {
    try {
        const categories = await Category.find({})
        res.send(categories)
    } catch (error) {
        console.error("Error while populating products with category:", error);
        throw error;
    }
}

export { addCategory, getCategories };