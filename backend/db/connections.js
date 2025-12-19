// // const mongoose = require("mongoose");

// // const ticketDB = mongoose.createConnection(process.env.TICKET_DB_URI);
// // const validationDB = mongoose.createConnection(process.env.VALIDATION_DB_URI);

// // module.exports = { ticketDB, validationDB };


// const mongoose = require("mongoose");

// const ticketDB = mongoose.createConnection(process.env.TICKET_DB_URI);
// const validationDB = mongoose.createConnection(process.env.VALIDATION_DB_URI);

// ticketDB.once("open", () => console.log("✅ Ticket DB connected"));
// validationDB.once("open", () => console.log("✅ Validation DB connected"));

// module.exports = { ticketDB, validationDB };


const mongoose = require("mongoose");

let ticketDB;
let validationDB;

if (!global._ticketDB) {
  if (!process.env.TICKET_DB_URI || !process.env.VALIDATION_DB_URI) {
    throw new Error("❌ MongoDB environment variables are missing");
  }

  global._ticketDB = mongoose.createConnection(
    process.env.TICKET_DB_URI,
    { serverSelectionTimeoutMS: 5000 }
  );

  global._validationDB = mongoose.createConnection(
    process.env.VALIDATION_DB_URI,
    { serverSelectionTimeoutMS: 5000 }
  );

  global._ticketDB.once("open", () =>
    console.log("✅ Ticket DB connected")
  );

  global._validationDB.once("open", () =>
    console.log("✅ Validation DB connected")
  );
}

ticketDB = global._ticketDB;
validationDB = global._validationDB;

module.exports = { ticketDB, validationDB };
