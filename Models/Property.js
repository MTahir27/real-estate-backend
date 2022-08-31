const mongoose = require("mongoose");
const { modelName } = require("./Users");

const PropertySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
    price: {
      type: mongoose.Schema.Types.Decimal128,
      require: true,
    },
    rooms: {
      type: Number,
      require: true,
    },
    bedrooms: {
      type: Number,
      require: true,
    },
    bathRooms: {
      type: Number,
      require: true,
    },
    livingRooms: {
      type: Number,
      require: true,
    },
    kitchen: {
      type: Number,
      require: true,
    },
    diningRooms: {
      type: Number,
      require: true,
    },
    area: {
      type: Number,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
    province: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const PropertyModal = mongoose.model("porperty", PropertySchema);
module.exports = PropertyModal;
