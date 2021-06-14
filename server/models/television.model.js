const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const televisionSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    model: {
      type: String,
    },
    brand: {
      type: String,
    },
    currentPrice: {
      type: Number,
      require: true,
    },
    oldPrice: {
      type: Number,
    },
    onSale: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
    },
    color: {
      type: String,
    },
    screenType: {
      type: String,
    },
    caracteristics: {
      productWidth: {
        type: String,
      },
      productDepth: {
        type: String,
      },
      hdmiInputs: {
        type: Number,
      },
      resolution: {
        type: String,
      },
      smart: {
        type: Boolean,
        default: false,
      },
      madeOf: {
        type: String,
      },
      wifi: {
        type: Boolean,
        default: false,
      },
    },
    description: {
      type: String,
    },
    images: [
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const television = mongoose.model('Television', televisionSchema);

module.exports = television;
