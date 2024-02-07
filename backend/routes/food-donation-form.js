const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/data_queries");

router.post("/food-donation-form", (req, res) => {
  const formData = req.body;
});
userQueries
  .saveFormData(formData)
  .then((result) => {
    res.status(200).json({ message: "Form data has been recorded", result });
  })
  .catch((error) => {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Internal server error" });
  });

module.exports = router;
