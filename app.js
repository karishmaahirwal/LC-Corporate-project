const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const config = require("./config");
const Book = require("./router/Book");



// security
app.use(helmet());

// cors
app.use(cors());

// convert everything to json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// mongodb database connect 
mongoose
  .connect(
    "mongodb+srv://Newuser:test123@cluster0.yjdxpcm.mongodb.net/your_database_name?retryWrites=true&w=majority",
    {
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000
    }
  )
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Handle connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Test connection
setTimeout(() => {
  console.log('Connection state:', mongoose.connection.readyState);
  // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
}, 5000);

app.get("/", (req, res) => res.send("success"));
app.use("/api", Book);




module.exports = app;