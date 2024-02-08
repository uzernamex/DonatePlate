const express = require("express");
const router = express.Router();
// const { savedDonationForm } = require("../db/queries/data_queries");
const { savedDonationForm } = require("./data_queries");

const data_queries = require("/../db/queries/")
router.post("/food-donation-form", async (req, res) => {
  const formData = req.body;
  try {
    await userQueries.insertUser(formData);
    res.status(200).json({ message: "Form data has been recorded" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Error saving form data" });
  }
});

module.exports = router;
