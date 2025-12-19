// router.post("/validate", async (req, res) => {
//   // 1. Extract ticketCode
//   // 2. Search Ticket DB
//   // 3. Search Validation DB
//   // 4. Insert if valid
// });



const express = require("express");
const Ticket = require("../models/Ticket");
const Validation = require("../models/Validation");

const router = express.Router();

router.post("/validate", async (req, res) => {
  try {
    const { ticketCode } = req.body;

    if (!ticketCode) {
      return res.status(400).json({
        status: "ERROR",
        message: "Ticket code missing"
      });
    }

    // 1️⃣ Check Ticket DB
    const ticket = await Ticket.findOne({ ticketCode });

    if (!ticket) {
      return res.json({
        status: "INVALID",
        message: "❌ Invalid QR Code"
      });
    }

    // 2️⃣ Check Validation DB
    const alreadyUsed = await Validation.findOne({ ticketCode });

    if (alreadyUsed) {
      return res.json({
        status: "ALREADY_VERIFIED",
        message: "⚠️ Ticket already verified"
      });
    }

    // 3️⃣ Save validation
    await Validation.create({
      ticketCode,
      ticketId: ticket._id,
      eventId: ticket.eventId,
      gate: req.headers["x-gate"] || "MAIN-GATE"
    });

    return res.json({
      status: "VERIFIED",
      message: "✅ Ticket verified successfully",
      studentName: ticket.studentName,
      eventName: ticket.eventName
    });

  } catch (err) {
    if (err.code === 11000) {
      return res.json({
        status: "ALREADY_VERIFIED",
        message: "⚠️ Ticket already verified"
      });
    }

    console.error(err);
    res.status(500).json({
      status: "ERROR",
      message: "Server error"
    });
  }
});

module.exports = router;
