const express = require("express");
const router = express.Router();
const { saveFoodDonation } = require("../db/queries/data_queries");

router.post("/", async (req, res) => {
  try {
    const formData = req.body;
    await saveFoodDonation(formData);
    res.status(200).json({ message: "Form data saved" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
