// JavaScript source code
// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Default route → index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Example API route (optional)
app.get("/api/status", (req, res) => {
    res.json({ status: "Quantum field stable", uptime: process.uptime() });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Les Téléportistes server running on http://localhost:${PORT}`);
});
