const Item = require('../models/item.model.js');

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
  const {
    name,
    model,
    price,
    brandLogo,
    quantity,
    images,
    description,
  } = req.body;
  let item = new Item({
    name,
    model,
    price,
    brandLogo,
    quantity,
    images,
    description,
  });

  // SAVE new item in DB
  item
    .save()
    .then(item => {
      res.json({
        data: item,
        message: 'New item added.',
      });
      console.log('New item added!');
    })
    .catch(err =>
      console.log(
        `Error ocurred when adding new Item. \nFor more details: \n ${err}`
      )
    );
};

const updateItem = (req, res, next) => {};

const deleteItem = (req, res, next) => {
  const id = req.params.item_id;
  Item.findByIdAndDelete(id)
    .then(res => res.json({ message: 'Item deleted.' }))
    .catch(err =>
      res.json({ message: `Error ocurred when deleting Item: ${id}` })
    );
};

module.exports = { getItems, getOneItem, addItem, updateItem, deleteItem };
