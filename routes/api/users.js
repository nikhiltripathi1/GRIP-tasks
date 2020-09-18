const express = require("express");
const router = express.Router();

//user model
const users = require("../../models/users");

// @route GET api/users
// @desc get all users
// @access public
router.get("/", (req, res) => {
  users.find().then((articles) => res.json(articles));
});

module.exports = router;
