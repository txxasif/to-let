const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  address: {
    type: String,
    default: "",
  },
  rooms: {
    type: Number,
    default: 0,
  },
  floorNo: {
    type: Number,
    default: 0,
  },
  bathroom: {
    type: Number,
    default: 0,
  },
  veranda: {
    type: Number,
    default: 0,
  },
  photos: {
    type: [String],
    default: [],
  },
  contactNumber: {
    type: String,
    default: "",
  },
  rent: {
    type: Number,
    default: 0,
  },
  type: {
    type: String,
    default: "both",
  },
  serviceCharge: {
    type: Number,
    default: 0,
  },
  lat: {
    type: Number,
    default: 0,
  },
  lng: {
    type: Number,
    default: 0,
  },
});

const Property =
  mongoose.models.Property || mongoose.model("Property", propertySchema);

module.exports = Property;
