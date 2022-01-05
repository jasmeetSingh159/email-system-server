const db = require("./db");
const config = require("../config");
const helper = require("../helper");

async function getDriverTrips(week, driver_name) {
  const rows = await db.query(
    `select driver_1_name, drop_date, load_from, load_to, truck_rego, trailer_a, trailer_b, driver_1_pay, driver_comments from daily_record_daily_record where weekno="${week}" and driver_1_name = "${driver_name}"`
  );

  const data = helper.emptyOrRows(rows);

  return {
    data, "validation": "FHT",
  };
}

module.exports = {
  getDriverTrips,
};
