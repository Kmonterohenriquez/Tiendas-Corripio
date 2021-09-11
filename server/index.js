require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { SERVER_PORT, ATLAS_URI } = process.env;
const app = express();
const path = require('path');

const port = process.env.PORT || SERVER_PORT;
// In Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    req.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}
// Import Routes for MongoDB
const ItemRoute = require("./routes/ItemRoute");

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
connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

// SETUP ROUTES
app.use("/items", ItemRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));
