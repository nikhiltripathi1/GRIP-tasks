const express = require("express");
const router = express.Router();

//user model
const transfers = require("../../models/transfers");

router.get("/", (req, res) => {
  transfers.find().then((transfer) => res.json(transfer));
});

module.exports = router;
