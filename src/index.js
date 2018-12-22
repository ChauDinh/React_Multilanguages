const express = require("express");
const app = express();
const path = require("path");

const makePath = filename => {
 return path.resolve(__dirname, "views", filename);
};

app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.get("/", (req, res) => {
 res.sendFile(makePath("en.html"));
});

app.get("/vi", (req, res) => {
 res.sendFile(makePath("vi.html"));
});

module.exports = app;