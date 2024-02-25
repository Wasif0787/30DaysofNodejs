const express = require('express');
const mongoose = require('mongoose');

const app = express();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/scaler");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        console.log(error)
        process.exit(1);
    }
};
connectDB()

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Category = mongoose.model("Category", categorySchema);

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

function createProductNameIndex() {
    ProductWithCategory.collection.createIndex({ name: 1 }, (err, result) => {
        if (err) {
            console.log(err);
            return err;
        }
        console.log(`Index created successfully`, result);
    })
}
// createProductNameIndex()
const productName = "Refrigerator";

ProductWithCategory.findOne({ name: productName })
    .then((docs) => {
        console.log("Result :", docs);
    })
    .catch((err) => {
        console.log(err);
    })

app.listen(3000, () => {
    console.log("Listening on port 3000");
})