const mongoose = require("mongoose");
const { Schema } = mongoose;

const quotesSchema = new Schema({
  firstname: {
    type: String,

    required: false,
    trim: true,
  },
  firstname: {
    type: String,

    required: false,
    trim: true,
  },
});

module.exports = quotesSchema;