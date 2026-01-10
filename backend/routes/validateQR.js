// // // router.post("/validate", async (req, res) => {
// // //   // 1. Extract ticketCode
// // //   // 2. Search Ticket DB
// // //   // 3. Search Validation DB
// // //   // 4. Insert if valid
// // // });



// // const express = require("express");
// // const Ticket = require("../models/Ticket");
// // const Validation = require("../models/Validation");

// // const router = express.Router();

// // router.post("/validate", async (req, res) => {
// //   try {
// //     const { ticketCode } = req.body;

// //     if (!ticketCode) {
// //       return res.status(400).json({
// //         status: "ERROR",
// //         message: "Ticket code missing"
// //       });
// //     }

// //     // 1️⃣ Check Ticket DB
// //     const ticket = await Ticket.findOne({ ticketCode });

// //     if (!ticket) {
// //       return res.json({
// //         status: "INVALID",
// //         message: "❌ Invalid QR Code"
// //       });
// //     }

// //     // 2️⃣ Check Validation DB
// //     const alreadyUsed = await Validation.findOne({ ticketCode });

// //     if (alreadyUsed) {
// //       return res.json({
// //         status: "ALREADY_VERIFIED",
// //         message: "⚠️ Ticket already verified"
// //       });
// //     }

// //     // 3️⃣ Save validation
// //     await Validation.create({
// //       ticketCode,
// //       ticketId: ticket._id,
// //       eventId: ticket.eventId,
// //       gate: req.headers["x-gate"] || "MAIN-GATE"
// //     });

// //     return res.json({
// //       status: "VERIFIED",
// //       message: "✅ Ticket verified successfully",
// //       studentName: ticket.studentName,
// //       eventName: ticket.eventName
// //     });

// //   } catch (err) {
// //     if (err.code === 11000) {
// //       return res.json({
// //         status: "ALREADY_VERIFIED",
// //         message: "⚠️ Ticket already verified"
// //       });
// //     }

// //     console.error(err);
// //     res.status(500).json({
// //       status: "ERROR",
// //       message: "Server error"
// //     });
// //   }
// // });

// // module.exports = router;


// const express = require("express");
// const Ticket = require("../models/Ticket");
// const Validation = require("../models/Validation");

// const router = express.Router();

// router.post("/validate", async (req, res) => {
//   try {
//     const { ticketCode } = req.body;

//     if (!ticketCode) {
//       return res.status(400).json({
//         status: "ERROR",
//         message: "Ticket code missing"
//       });
//     }

//     const ticket = await Ticket.findOne({ ticketCode });

//     if (!ticket) {
//       return res.json({
//         status: "INVALID",
//         message: "❌ Invalid QR Code"
//       });
//     }

//     const alreadyUsed = await Validation.findOne({ ticketCode });

//     if (alreadyUsed) {
//       return res.json({
//         status: "ALREADY_VERIFIED",
//         message: "⚠️ Ticket already verified"
//       });
//     }

//     await Validation.create({
//       ticketCode,
//       ticketId: ticket._id,
//       eventId: ticket.eventId,
//       gate: req.headers["x-gate"] || "MAIN-GATE"
//     });

//     res.json({
//       status: "VERIFIED",
//       message: "✅ Ticket verified successfully",
//       studentName: ticket.studentName,
//       eventName: ticket.eventName,
//       quantity: ticket.quantity   // ✅ ADDED

//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       status: "ERROR",
//       message: "Server error"
//     });
//   }
// });


// /* =====================================================
//    🔍 GET FULL TICKET DETAILS (READ-ONLY)
// ===================================================== */
// router.post("/details", async (req, res) => {
//   try {
//     const { ticketCode } = req.body;

//     if (!ticketCode) {
//       return res.status(400).json({
//         status: "ERROR",
//         message: "Ticket code missing"
//       });
//     }

//     const ticket = await Ticket.findOne({ ticketCode });

//     if (!ticket) {
//       return res.json({
//         status: "INVALID",
//         message: "❌ Invalid QR Code"
//       });
//     }

//     const validation = await Validation.findOne({ ticketCode });

//     res.json({
//       status: "VALID",
//       isVerified: !!validation,
//       ticket: {
//         _id: ticket._id,
//         eventId: ticket.eventId,
//         eventName: ticket.eventName,
//         studentName: ticket.studentName,
//         rollNumber: ticket.rollNumber,
//         year: ticket.year,
//         department: ticket.department,
//         section: ticket.section,
//         email: ticket.email,
//         phone: ticket.phone,
//         price: ticket.price,
//         quantity: ticket.quantity ,  // ✅ ADDED
//         ticketCode: ticket.ticketCode,
//         status: ticket.status,
//         createdAt: ticket.createdAt
//       }
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       status: "ERROR",
//       message: "Server error"
//     });
//   }
// });


// module.exports = router;


const express = require("express");
const Ticket = require("../models/Ticket");
const Validation = require("../models/Validation");

const router = express.Router();

/* =====================================================
   ✅ VALIDATE TICKET (QR SCAN)
===================================================== */
router.post("/validate", async (req, res) => {
  try {
    const { ticketCode } = req.body;

    if (!ticketCode) {
      return res.status(400).json({
        status: "ERROR",
        message: "Ticket code missing"
      });
    }

    const ticket = await Ticket.findOne({ ticketCode });

    if (!ticket) {
      return res.json({
        status: "INVALID",
        message: "❌ Invalid QR Code"
      });
    }

    const alreadyUsed = await Validation.findOne({ ticketCode });

    if (alreadyUsed) {
      return res.json({
        status: "ALREADY_VERIFIED",
        message: "⚠️ Ticket already verified",
        quantity: ticket.quantity
      });
    }

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
      eventName: ticket.eventName,
      quantity: ticket.quantity // ✅ NEWLY ADDED
    });

  } catch (err) {
    console.error("Ticket validation error:", err);
    return res.status(500).json({
      status: "ERROR",
      message: "Server error"
    });
  }
});


/* =====================================================
   🔍 GET FULL TICKET DETAILS (READ-ONLY)
===================================================== */
router.post("/details", async (req, res) => {
  try {
    const { ticketCode } = req.body;

    if (!ticketCode) {
      return res.status(400).json({
        status: "ERROR",
        message: "Ticket code missing"
      });
    }

    const ticket = await Ticket.findOne({ ticketCode });

    if (!ticket) {
      return res.json({
        status: "INVALID",
        message: "❌ Invalid QR Code"
      });
    }

    const validation = await Validation.findOne({ ticketCode });

    return res.json({
      status: "VALID",
      isVerified: !!validation,
      ticket: {
        _id: ticket._id,
        eventId: ticket.eventId,
        eventName: ticket.eventName,

        studentName: ticket.studentName,
        rollNumber: ticket.rollNumber,
        year: ticket.year,
        department: ticket.department,
        section: ticket.section,

        email: ticket.email,
        phone: ticket.phone,

        price: ticket.price,
        quantity: ticket.quantity, // ✅ NEWLY ADDED

        ticketCode: ticket.ticketCode,
        status: ticket.status,
        createdAt: ticket.createdAt
      }
    });

  } catch (err) {
    console.error("Ticket details error:", err);
    return res.status(500).json({
      status: "ERROR",
      message: "Server error"
    });
  }
});

module.exports = router;
