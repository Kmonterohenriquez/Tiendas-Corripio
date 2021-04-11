const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    model: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
    },
    brandLogo: {
      type: String,
      trim: true
    },
    quantity: {
      type: Number,
      require: true,
    },
    images: [
      {
        type: String,
        trim: true
      },
      {
        type: String,
        trim: true
      },
      {
        type: String,
        trim: true
      }
    ],
    description: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
