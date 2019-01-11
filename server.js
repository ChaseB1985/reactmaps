const express = require("express");
const mongoose = require("mongoose");
//creates http server
const app = express();

const PORT = process.env.PORT || 8080;

// Define middleware - bring in your code to speak with another lib?
//without these we cannot import our code. Intros new code to help server 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("client/public"));

const userRoutes = require("./routes/user.js");
app.use(userRoutes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactfullstack");




// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



