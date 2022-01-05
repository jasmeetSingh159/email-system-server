const express = require("express");
const router = express.Router();
const totalPay = require("../services/totalPay");

/* GET programming languages. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await totalPay.totalPay(req.query.week, req.query.driver));
  } catch (err) {
    console.error(`Error while getting total pay `, err.message);
    next(err);
  }
});

module.exports = router;