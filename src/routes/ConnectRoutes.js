const express = require("express");
const router = express.Router();
const {createconn} = require("../controllers/connectController");
router.post("/",createconn);
module.exports = router;