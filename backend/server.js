// load .env data into process.env
require("dotenv").config();

// Web server config

const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const app = express();

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded


app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

app.use(express.static('public'));
app.use(cors());
// // Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


// Separated Routes for each Resource

const userApiRoutes = require("./routes/users-api");
// const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require("./routes/users");
const foodDonationRoutes = require("./routes/food_donation_form");
const singleDonationApiRoutes = require("./routes/display-single-donation-api");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use("/api/users", userApiRoutes);

app.use("/users", usersRoutes);

app.use("/api/food-donations", foodDonationRoutes);
app.use("/api/users", userApiRoutes);
app.use("/api/donation", singleDonationApiRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
