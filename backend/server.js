// // app.use("/api/qr", validateRoute);
// // app.listen(5000);




// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");

// dotenv.config();

// const validateQRRoute = require("./routes/validateQR");

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/qr", validateQRRoute);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () =>
//   console.log(`🚀 Backend running on port ${PORT}`)
// );


const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());

// routes
app.use("/api/qr", require("./routes/validateQR"));

const PORT = process.env.PORT || 5000;
// app.listen(PORT, () =>
//   console.log(`Server running on port ${PORT}`)
// );
