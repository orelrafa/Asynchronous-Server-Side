/*
Developers:
First name: Orel, Nikita
Last name: Rafailov, Borochov
ID: 318972957, 302238399
*/
// Importing necessary modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Importing route modules
const costRoute = require("./routes/costs_route.js");
const reportRoutes = require("./routes/report_route.js");
const aboutRoutes = require("./routes/about_route.js");

// Creating an instance of Express
const app = express();

// Middleware setup
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: false })); // For parsing application/x-www-form-urlencoded
app.use(cors()); // For enabling CORS (Cross-Origin Resource Sharing)

// Routes setup
app.use("/addcost", costRoute); // For handling cost related requests
app.use("/report", reportRoutes); // For handling report related requests
app.use("/about", aboutRoutes); // For handling about related requests

// Connecting to MongoDB Atlas database
mongoose
  .connect(
    "mongodb+srv://nikitaboro03:zvQ2zMmTdJmgA7Py@backenddb.ipskpzg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    // Starting the server
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection to database failed!");
  });
