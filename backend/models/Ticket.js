// const mongoose = require("mongoose");
// const { ticketDB } = require("../db/connections");

// const TicketSchema = new mongoose.Schema({ 

//  eventId: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
//   eventName: { type: String }, // optional snapshot
//   price: { type: Number, default: 0 },

//   studentName: { type: String, required: true },
//   rollNumber: String,
//   year: String,
//   department: String,
//   section: String,

//   email: { type: String, required: true },
//   phone: { type: String, required: true },

//   ticketCode: { type: String, unique: true, sparse: true },
//   status: { type: String, enum: ['pending','paid','cancelled','sent'], default: 'pending' },

//   razorpayOrderId: String,
//   razorpayPaymentId: String,

//   qrDataUrl: String,          // data:image/png;base64,...
//   pdfTicketBase64: String,    // base64 pdf
//   imagePath: String,          // relative path to generated PNG saved in /uploads/tickets
// }, { timestamps: true });


// module.exports = ticketDB.model("Ticket", TicketSchema);


const mongoose = require("mongoose");
const { ticketDB } = require("../db/connections");

const TicketSchema = new mongoose.Schema(
  {
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true
    },

    eventName: String,
    price: { type: Number, default: 0 },
    quantity: { type: Number, default: 1 }, // number of tickets
    seats: [String], // array of seat identifiers


    studentName: { type: String, required: true },
    rollNumber: String,
    year: String,
    department: String,
    section: String,

    email: { type: String, required: true },
    phone: { type: String, required: true },

    ticketCode: { type: String, unique: true, sparse: true },
    status: {
      type: String,
      enum: ["pending", "paid", "cancelled", "sent"],
      default: "pending"
    },

    razorpayOrderId: String,
    razorpayPaymentId: String,

    qrDataUrl: String,
    pdfTicketBase64: String,
    imagePath: String
  },
  { timestamps: true }
);

module.exports = ticketDB.model("Ticket", TicketSchema);
