const express = require("express");
const router = express.Router();
const {getShortUserBySkill}= require("../Controller/shortUserController");


router.route("/getshortuser/:skill")
    .get(getShortUserBySkill)

module.exports = router;