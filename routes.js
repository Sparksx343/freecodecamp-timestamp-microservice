const express = require("express");
const router = express.Router();
const controllers = require("./controllers");

router.get("/:date?", (req, res) => {
  req.params.date = req.params.date || new Date();
  controllers.date(req.params, req, res);
});

module.exports = router;
