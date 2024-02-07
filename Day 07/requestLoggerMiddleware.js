const express = require("express")
const app = express()

function requestLoggerMiddleware(req, res, next) {
    const method = req.method
    const timestamp = new Date().toISOString()
    console.log(`${timestamp} - ${method} request received`);
    next()
}

app.use(requestLoggerMiddleware)

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})