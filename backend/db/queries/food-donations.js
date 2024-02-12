const express = require("express");
const router = express.Router();
const {
  saveFoodDonation,
  getFoodDonations,
} = require("../db/queries/data_queries");
// const data_queries = require('../db/queries/userQueries');

router.get("/api/food-donations", (req, res) => {
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
    const formData = req.body;

    const savedData = await saveFoodDonation(formData);
    await saveFoodDonation(formData);
    console.log("form data:", formData);

    saveFoodDonation(formData).then((data) => {
      console.log("data:", data);
      res.status(200).json({ message: "Form data saved" });
    });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
