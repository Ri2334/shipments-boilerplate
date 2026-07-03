const express = require("express");
const router = express.Router();
const {createrate} = require("../controllers/RateController");
router.post("/",createrate);
module.exports = router;
