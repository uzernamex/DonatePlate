// load .env data into process.env
require("dotenv").config();

// Web server configuration

const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const app = express();
// const userQueries = require("../db/queries/userQueries");

var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded

const usersRouter = require("./routes/users-api"); // Adjust the path as needed

app.use("/api/users", usersRouter);

app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));
app.use(cors());

// Add headers before the routes are defined
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// Separated Routes for each Resource

const userApiRoutes = require("./routes/users-api");
const usersRoutes = require("./routes/users");
const foodDonationRoutes = require("./routes/food-donations");
const singleDonationApiRoutes = require("./routes/display-single-donation-api");
const insertMessageAPiRoutes = require("./routes/insert-message-api");
const displayAllMessagesAPiRoutes = require("./routes/display-all-messages-api");

// app.use("/api/food-donation-form", saveFoodDonation);
app.use("/api/food-donations", foodDonationRoutes);

// const saveAddress = require("../frontend/src/data_queries").saveAddress;
app.use("/api/users", userApiRoutes);
app.use("/users", usersRoutes);
app.use("/api/donation", singleDonationApiRoutes);
app.use("/api/insert-message", insertMessageAPiRoutes);
app.use("/api/display-messages", displayAllMessagesAPiRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/all-donations", (req, res) => {
  res.render("all-donations");
});

// app.get("/api/donation/:id", async (req, res)
app.get("/my-food-drives", async (req, res) => {
  try {
    const user = await userQueries.getUserBySubId(req.user.sub); 
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const donations = await userQueries.getDonationsByUserId(user.id);
    res.json({ data: donations });
  } catch (error) {
    console.error("Error fetching user donations:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
