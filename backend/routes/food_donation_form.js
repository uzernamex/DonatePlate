const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/data_queries");

router.post("http://localhost:3000/donation-form-submitted", (req, res) => {
  const formData = req.body;
  console.log(formData);
});

module.exports = router;
