const express = require("express")
const app = express()

function greetHandler(req, res) {
    const name = req.query.name ?? "Guest"
    res.send(`<h1>Hello, ${name}!</h1>`)
}

app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/greet", greetHandler)

app.listen(3000, () => (
    console.log("Listening to PORT 3000")
))