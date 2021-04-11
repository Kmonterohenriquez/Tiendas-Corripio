const express = require('express');
const router = express.Router();

const ItemController = require('../controllers/ItemController.js');


// GET all items
router.get('/', ItemController.getItems);

// GET one item
router.get('/:item_id', ItemController.getOneItem);

// ADD one item
router.post('/', ItemController.addItem);

// UPDATE one item
router.put('/:item_id', ItemController.updateItem);

// DELETE one item
router.delete('/:item_id', ItemController.deleteItem);
