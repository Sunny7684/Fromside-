const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", { name: null });
});

app.post("/submit", (req, res) => {
  res.render("index", { name: req.body.username });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});