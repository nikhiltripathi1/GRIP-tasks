const express = require("express");
const router = express.Router();

//user model
const transfers = require("../../models/transfers");
const user = require("../../models/users");

router.get("/", (req, res) => {
  transfers.find().then((transfer) => res.json(transfer));
});

router.post("/", (req, res) => {
  const newtransaction = new transfers({
    sentBy: req.body.sentBy,
    sentTo: req.body.sentTo,
    credits: req.body.credits,
  });
  newtransaction
    .save()
    .then((transfer) => res.json(transfer))
    .catch((err) => console.log("error"));
});
router.put("/:ids&:idr", (req, res) => {
  user
    .updateOne({ _id: req.params.id }, { credits: req.body.credits })
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
