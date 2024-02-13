const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

function positiveIntegerHandler(req, res, next) {
    const number = parseInt(req.query.number);
    if (Number.isInteger(number) && number > 0) {
        console.log(`Number ${number} is Positive`);
        res.status(200).json({ message: `Success: Number ${number} is positive` })
    } else {
        const error = new Error(`Number ${number} must be a positive integer.`);
        error.status = 400;
        next(error);
    }
}
function errorHandler(err, req, res, next) {
    console.log(err.message);
    res.status(err.status || 500).json({ error: err.message })
}

app.get("/", (req, res) => {
    res.send("Hello");
});
app.get("/positive", positiveIntegerHandler);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}`);
});
