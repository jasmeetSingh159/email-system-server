const db = require("./db");
const config = require("../config");
const helper = require("../helper");

async function weekNumber() {
  const rows = await db.query(
    `SELECT weekno FROM daily_record_daily_record order by pickup_date desc limit 1`
  );

  const data = helper.emptyOrRows(rows);

  return {
    data, "validation": "FHT",
  };
}

module.exports = {
  weekNumber,
};
