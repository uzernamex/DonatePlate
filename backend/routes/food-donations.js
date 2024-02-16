const express = require("express");
const router = express.Router();
const { saveFoodDonation, getFoodDonations, saveAddress } = require("../db/queries/data-queries2.js");

router.get("/", (req, res) => {
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

    saveFoodDonation(formData).then((data) => {
      saveAddress(formData, data.id);
      res.status(200).json({ message: "Form data saved", key: data });
    });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Server Error" })
  }
});

module.exports = router;
