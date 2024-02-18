const express = require('express')
const mongoose = require('mongoose')
const app = express()

async function connectToMongoDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/scaler')
        console.log("Mongodb connection established");
    } catch (error) {
        console.log(error);
    }
}
connectToMongoDB()

const userSchmea = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true }
})

const User = mongoose.model('User', userSchmea)

async function getAllUsers(req, res) {
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        console.log(error);
    }
}

app.get("/users", (req, res) => {
    getAllUsers(req, res);
})

app.listen(3000, () => {
    console.log("Listening to port 3000");
})