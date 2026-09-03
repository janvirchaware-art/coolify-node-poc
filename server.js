const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from Node.js - Coolify POC v2");
});

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        application: "node-poc"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Node application running on port ${PORT}`);
});
