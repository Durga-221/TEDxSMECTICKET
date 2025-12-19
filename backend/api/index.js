// // import express from "express";
// // import cors from "cors";

// // const app = express();

// // app.use(cors());
// // app.use(express.json());

// // app.get("/api/health", (req, res) => {
// //   res.json({
// //     success: true,
// //     message: "Backend deployed successfully 🚀"
// //   });
// // });

// // // Example API
// // app.post("/api/test", (req, res) => {
// //   res.json({ received: req.body });
// // });

// // export default app;



// const express = require("express");
// const cors = require("cors");

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

// module.exports = app;


const express = require("express");
const cors = require("cors");
require("dotenv").config();

// 🔹 DB connections (IMPORTANT: just importing initializes them)
// require("../db/connections");

const qrRoutes = require("../routes/validateQR");

const app = express();


process.on("uncaughtException", err => {
  console.error("❌ Uncaught Exception:", err);
});

process.on("unhandledRejection", err => {
  console.error("❌ Unhandled Rejection:", err);
});

app.use(cors({ origin: "*" }));
app.use(express.json());

// health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend running on Vercel 🚀"
  });
});

// routes
app.use("/api/qr", qrRoutes);

module.exports = app; // ✅ REQUIRED
