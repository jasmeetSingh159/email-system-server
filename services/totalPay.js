const db = require("./db");
const config = require("../config");
const helper = require("../helper");

async function totalPay(week, driver_name) {
  const rows = await db.query(
    `select SUM(driver_1_pay) as "pay" from daily_record_daily_record where weekno="${week}" and driver_1_name = "${driver_name}"`
  );

  const data = helper.emptyOrRows(rows);

  return {
    data, "validation": "FHT",
  };
}

module.exports = {
  totalPay,
};
