const express = require("express");
const router = express.Router();
const {userSignup} = require("../Controller/userController");

router.route("/user/signup")
    .post(userSignup);

module.exports = router;