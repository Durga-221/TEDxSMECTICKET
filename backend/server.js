// // // // app.use("/api/qr", validateRoute);
// // // // app.listen(5000);




// // // const express = require("express");
// // // const dotenv = require("dotenv");
// // // const cors = require("cors");

// // // dotenv.config();

// // // const validateQRRoute = require("./routes/validateQR");

// // // const app = express();
// // // app.use(cors());
// // // app.use(express.json());

// // // app.use("/api/qr", validateQRRoute);

// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () =>
// // //   console.log(`🚀 Backend running on port ${PORT}`)
// // // );


// // const express = require("express");
// // const cors = require("cors");
// // require("dotenv").config();

// // const app = express();

// // app.use(cors({
// //   origin: "*"
// // }));
// // app.use(express.json());

// // // routes
// // app.use("/api/qr", require("./routes/validateQR"));

// // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () =>
// // //   console.log(`Server running on port ${PORT}`)
// // // );



// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// require("./db/connections");
// const qrRoutes = require("./routes/validateQR");

// const app = express();

// app.use(cors({ origin: "*" }));
// app.use(express.json());

// app.get("/api/health", (req, res) => {
//   res.json({
//     success: true,
//     message: "Backend running 🚀"
//   });
// });

// app.use("/api/qr", qrRoutes);

// /**
//  * 🔹 LOCAL ONLY
//  * Vercel will IGNORE this
//  */
// if (process.env.NODE_ENV !== "production") {
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () =>
//     console.log(`✅ Local server running on port ${PORT}`)
//   );
// }

// // 🔹 REQUIRED FOR VERCEL
// module.exports = app;


const express = require("express");
const cors = require("cors");
require("dotenv").config();

require("./db/connections");
const qrRoutes = require("./routes/validateQR");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend running 🚀"
  });
});

app.use("/qr", qrRoutes);

// ✅ REQUIRED FOR RENDER (ALWAYS LISTEN)
const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
