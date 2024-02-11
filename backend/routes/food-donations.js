const express = require("express");
const router = express.Router();
const {
  saveFoodDonation,
  getFoodDonations,
} = require("../../frontend/src/data_queries");
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
    const formData = req.body;

    // const savedData = await saveFoodDonation(formData);
    // await saveFoodDonation(formData);
    "form data:", formData;

    //save the data to food donation table
    //then return the food donation object
    // using the food donation id, save the rest of the inforation into the address table

    saveFoodDonation(formData).then((data) => {
      "data:", data;
      res.status(200).json({ message: "Form data saved" });
    });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
