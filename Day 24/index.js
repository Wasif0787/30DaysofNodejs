import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoute.js"
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

app.use(express.json({ limit: '200mb' }));
app.use("/products", productRoutes)

app.listen(3000, () => {
    console.log("Listening to port 3000");
})

