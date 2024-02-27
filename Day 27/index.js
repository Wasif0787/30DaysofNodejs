import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;

const users = [
    {
        username: "admin",
        password: "adminpassword",
        role: "admin"
    },
    {
        username: "user",
        password: "userpassword",
        role: "user"
    }
];

function authenticateAndAuthorize(req, res, next) {
    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }

        const { username } = decoded;

        const user = users.find(u => u.username === username);
        console.log(user);
        if (!user) {
            return res.status(401).json({ message: "Unauthorized: User not found" });
        }

        req.user = user;
        next();
    });
}

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user || user.password !== password) {
        return res.status(401).json({ message: "Unauthorized: Invalid username or password" });
    }

    const token = jwt.sign({ username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
});

app.get("/protected", authenticateAndAuthorize, (req, res) => {
    res.json({ message: "Protected route accessed successfully", user: req.user });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
