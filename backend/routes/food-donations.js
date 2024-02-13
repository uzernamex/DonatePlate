const express = require("express");
const router = express.Router();
const { saveFoodDonation, getFoodDonations } = require("./data-queries2.js");

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
      console.log("data:", data);
      res.status(200).json({ message: "Form data saved", key: data });
    });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
