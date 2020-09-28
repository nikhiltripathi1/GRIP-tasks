const express = require("express");
const router = express.Router();

//user model
const transfers = require("../../models/transfers");

router.get("/", (req, res) => {
  transfers
    .find()
    .sort({ date: -1 })
    .then((transfer) => res.json(transfer));
});

module.exports = router;
