// const mongoose = require("mongoose");

// const ticketDB = mongoose.createConnection(process.env.TICKET_DB_URI);
// const validationDB = mongoose.createConnection(process.env.VALIDATION_DB_URI);

// module.exports = { ticketDB, validationDB };


const mongoose = require("mongoose");

const ticketDB = mongoose.createConnection(process.env.TICKET_DB_URI);
const validationDB = mongoose.createConnection(process.env.VALIDATION_DB_URI);

ticketDB.once("open", () => console.log("✅ Ticket DB connected"));
validationDB.once("open", () => console.log("✅ Validation DB connected"));

module.exports = { ticketDB, validationDB };
