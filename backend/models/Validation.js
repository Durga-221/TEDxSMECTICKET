// // const mongoose = require("mongoose");
// // const { validationDB } = require("../db/connections");

// // const ValidationSchema = new mongoose.Schema({
// //   ticketCode: { type: String, unique: true },
// //   ticketId: mongoose.Schema.Types.ObjectId,
// //   eventId: mongoose.Schema.Types.ObjectId,
// //   verifiedAt: { type: Date, default: Date.now }
// // });

// // module.exports = validationDB.model("Validation", ValidationSchema);


// const mongoose = require("mongoose");
// const { Schema } = mongoose;
// const { validationDB } = require("../db/connections");

// const ValidationSchema = new Schema({
//   ticketCode: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   ticketId: {
//     type: Schema.Types.ObjectId,
//     required: true
//   },
//   eventId: {
//     type: Schema.Types.ObjectId,
//     required: true
//   },
//   verifiedAt: {
//     type: Date,
//     default: Date.now
//   },
//   gate: {
//     type: String,
//     default: "MAIN-GATE"
//   }
// });

// module.exports = validationDB.model("Validation", ValidationSchema);


const mongoose = require("mongoose");
const { validationDB } = require("../db/connections");

const ValidationSchema = new mongoose.Schema({
  ticketCode: { type: String, required: true, unique: true },
  ticketId: { type: mongoose.Schema.Types.ObjectId, required: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, required: true },
  verifiedAt: { type: Date, default: Date.now },
  gate: { type: String, default: "MAIN-GATE" }
});

module.exports = validationDB.model("Validation", ValidationSchema);
