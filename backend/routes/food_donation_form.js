const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/data_queries');

router.post('/abcd', (req, res) => {

  const formData = req.body;
  if (!formData.phone || !/^[0-9]+$/.test(formData.phone)) {
    return res.status(400).json({ error: "Invalid phone number" });
  }
  res.json({ success: true });
});

module.exports = router;
