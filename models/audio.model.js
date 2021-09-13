const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const audioSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    category: {
     type: String,
     require: true
    },
    brand: {
      type: String,
      require: true
    },
    quantity: {
      type: Number,
      require: true,
    },
    model: {
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
    color: {
      type: String,
    },
    wireless: {
      type: Boolean,
      default: false,
    },
    power: {
      type: String,
    },
    productWidth: {
      type: String,
    },
    bluetooth: {
      type: Boolean,
    },
    speakerType: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const audio = mongoose.model('Audio', audioSchema);

module.exports = audio;
