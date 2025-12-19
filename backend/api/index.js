// import express from "express";
// import cors from "cors";

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/api/health", (req, res) => {
//   res.json({
//     success: true,
//     message: "Backend deployed successfully 🚀"
//   });
// });

// // Example API
// app.post("/api/test", (req, res) => {
//   res.json({ received: req.body });
// });

// export default app;



const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend deployed successfully 🚀"
  });
});

// Example API
app.post("/api/test", (req, res) => {
  res.json({ received: req.body });
});

module.exports = app;
