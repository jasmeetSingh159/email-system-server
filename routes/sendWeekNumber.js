const express = require("express");
const router = express.Router();
const weekNumber = require("../services/sendWeekNumber");

/* GET programming languages. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await weekNumber.weekNumber());
  } catch (err) {
    console.error(`Error while getting Driver `, err.message);
    next(err);
  }
});

module.exports = router;