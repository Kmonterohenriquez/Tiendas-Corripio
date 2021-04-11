require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { SERVER_PORT, ATLAS_URI } = process.env;
const app = express();

// Import Routes for MongoDB
const ItemRoute = require('./routes/ItemRoute');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/../build`));

// MongoDB connection
const uri = ATLAS_URI;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully!');
});

// SETUP ROUTES
app.use('/items', ItemRoute);

const port = SERVER_PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
