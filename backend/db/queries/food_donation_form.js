const express = require("express");
const router = express.Router();
const {
  saveFoodDonation,
  getFoodDonations,
} = require("../db/queries/data_queries");
// const data_queries = require('../db/queries/userQueries');

router.get("/", (req, res) => {
  // data_queries.getFoodDonations()
  getFoodDonations()
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/", async (req, res) => {
  try {
    // const formData = req.body;
    await saveFoodDonation(formData);
    res.status(200).json({ message: "Form data saved" });
    //translate and return json
    //save return to variable
    //return var
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
