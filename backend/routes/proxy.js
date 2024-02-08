const express = require("express");
const path = require("path");
const router = express.Router();
router.get("/redirected-file", (req, res) => {
  res.sendFile(path.join(__dirname, "path/to/redirected-file"));
});
module.exports = router;
