const Item = require('../models/item.model');

// GET ALL ITEMS
const getItems = (req, res, next) => {
  Item.find().then(items => {
    if (items) {
      res.status(200).json({
        status: 'Success',
        message: 'Items ready!',
        data: items,
      });
      return;
    } else {
      res.status(401).json({
        status: 'Error',
        message: 'Items not found.',
      });
    }
  });
};

// GET ONE ITEM
const getOneItem = (req, res, next) => {
  Item.findOne({ $or: [{ _id: req.params.item_id }] }).then(item => {
    if (item) {
      res.status(200).json({
        status: 'Success',
        message: 'Item ready!',
      });
    } else {
      res.status(401).json({
        status: 'Error',
        message: 'Item not found.',
      });
    }
  });
};

// ADD item
const addItem = (req, res, next) => {
  const { name, model } = req.body;
  let item = new Item({
    name,
    model,
  });

  // SAVE new item in DB
  item.save().then(item=>{
    res.json({
      data: item, 
      message: 'New item created' 
    })
  })
};
