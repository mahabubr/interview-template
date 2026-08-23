const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Express API is running",
  });
});

app.post("/", (req, res) => {
  res.json({
    success: true,
    message: "POST",
  });
});

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "GET",
  });
});

app.get("/:id", (req, res) => {
  res.json({
    success: true,
    message: "SINGLE GET",
  });
});

app.path("/:id", (req, res) => {
  res.json({
    success: true,
    message: "PATCH",
  });
});

app.put("/:id", (req, res) => {
  res.json({
    success: true,
    message: "PUT",
  });
});

app.delete("/:id", (req, res) => {
  res.json({
    success: true,
    message: "DELETE",
  });
});

module.exports = app;
