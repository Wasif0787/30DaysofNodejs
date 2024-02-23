import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"

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

const app = express();
app.use(express.json({ limit: '200mb' }));

app.use("/products", productRoutes)
app.use("/category", categoryRoutes)

app.listen(3000, () => {
    console.log("Listening to port 3000");
})