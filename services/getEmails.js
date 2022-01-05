const db = require("./db");
const config = require("../config");
const helper = require("../helper");

async function getEmails(driver_name) {

  driverName = driver_name.split(" ");
  driverName[1] = driverName[1]==='' ? 'NULL' : `"${driverName[1]}"`;
  const middleNameQuery = driverName[1]==='NULL' ? 'middle_name is NULL' : `middle_name=${driverName[1]}`;
  const sql = `select first_name, middle_name, last_name, email from drivers_drivers where driver_status="current" and first_name="${driverName[0]}" and ${middleNameQuery} and last_name="${driverName[2]}"`;
  const rows = await db.query(
    sql
  );

  const data = helper.emptyOrRows(rows);

  return {
    data, "validation": "FHT",
  };
}

module.exports = {
  getEmails,
};
