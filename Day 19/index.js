const express = require('express');
const mongoose = require('mongoose');
const addUserWithValidation = require('./addUserWithValidation');

const app = express();

app.use(express.json());


mongoose.connect('mongodb://localhost:27017/scaler')
    .then(() => {
        console.log("Mongodb connection established");
    })
    .catch((error) => {
        console.error(error.message);
    });


addUserWithValidation({ username: 'john_doe', email: 'abc@gmail.com' });

app.listen(3000, () => {
    console.log("Listening on port 3000");
});