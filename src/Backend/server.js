const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const users = []; // Para simplicidade, armazenando usuários em memória.

// Rota de registro
app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).json({ message: "User registered!" });
});

// Rota de login
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ username }, "SECRET_KEY", { expiresIn: "1h" });""
        res.json({ token });
    } else {
        res.status(401).json({ message: "Invalid credentials!" });
    }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
