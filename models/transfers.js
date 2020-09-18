const mongoose = require("mongoose");
const schema = mongoose.Schema;

//create schema
const transactions = new schema({
  sentBy: {
    type: String,
    required: true,
  },
  sentTo: {
    type: String,
    required: true,
  },
  credits: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Transfer = mongoose.model("GRIP-transactions", transactions);
