const express = require('express');
const mongoose = require('mongoose');
const app = express();
const averageAge = require('./averageAgeOfUsers')

mongoose.connect('mongodb://localhost:27017/scaler')
    .then(() => {
        console.log("Mongodb connection established");
    })
    .catch((error) => {
        console.error(error.message);
    });

app.get('/average-age', averageAge)

app.listen(3000, () => {
    console.log("Listening to port 3000");
})