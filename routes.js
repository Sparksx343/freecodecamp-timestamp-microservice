const express = require("express");
const router = express.Router();
const controllers = require("./controllers");

router.get("/:date?", (req, res) => {
  req.params.date = req.params.date || new Date().toISOString().split("T")[0];
  controllers.date(req.params, req, res);
});

router.get("/", (req, res) => {
  controllers.date(new Date(), req, res);
});

module.exports = router;
