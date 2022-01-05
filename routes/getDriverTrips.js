const express = require("express");
const router = express.Router();
const getDriverTrips = require("../services/getDriverTrips");

/* GET programming languages. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await getDriverTrips.getDriverTrips(req.query.week, req.query.driver));
  } catch (err) {
    console.error(`Error while getting driver trips `, err.message);
    next(err);
  }
});

module.exports = router;