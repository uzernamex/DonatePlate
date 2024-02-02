const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/data_queries");

router.post("/", (req, res) => {
  console.log("fire");
  const formData = req.body;
  console.log(formData);
  // if (!formData.phone || !/^[0-9]+$/.test(formData.phone)) {
  //   return res.status(400).json({ error: "Invalid phone number" });
  // }
  // res.json({ success: true });
});

module.exports = router;
