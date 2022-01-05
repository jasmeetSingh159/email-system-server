const express = require("express");
const router = express.Router();
const sendEmail = require("../services/sendEmail");

/* GET programming languages. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await sendEmail.sendEmail(req.query.week, req.query.driver));
  } catch (err) {
    console.error(`Error while sending`, err.message);
    next(err);
  }
});

module.exports = router;