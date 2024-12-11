const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public")); // Serve static files from "public" directory

// Mock user database
const usersFile = "./users.json";

// Login Endpoint
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Read user database
    fs.readFile(usersFile, "utf-8", (err, data) => {
        if (err) return res.status(500).json({ success: false, message: "Server error" });

        const users = JSON.parse(data);

        // Validate user
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
