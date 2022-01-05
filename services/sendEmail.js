const emailer = require('../assets/emailer');
const { getDriverTrips } = require('./getDriverTrips');
const { totalPay } = require('./totalPay');
const { getEmails } = require('./getEmails')

async function sendEmail(week, driver_name) {
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const data = await getDriverTrips(week, driver_name);
  const trips = data.data;
  const pay = await totalPay(week, driver_name);
  const driverPay = pay.data[0].pay;
  const emails = await getEmails(driver_name);
  const driverEmail = emails.data[0].email;
  let html = `

    <p>Hello ${driver_name}. 
    Please check for any missing entries and inform immediately.</p>

    <b>Total Pay:</b> <b style="color:red">${driverPay}</b>

    <table border=1 style="padding: 10px">
      <tr style="padding: 10px">
        <th style="padding: 10px"> Date </th>
        <th style="padding: 10px"> Trip </th>
        <th style="padding: 10px"> Truck </th>
        <th style="padding: 10px"> Tralier A </th>
        <th style="padding: 10px"> Tralier B </th>
        <th style="padding: 10px"> Pay </th>
        <th style="padding: 10px"> Comments </th>
      </tr>
  `;
  for (i = 0; i < trips.length; i++){
    const date = `${trips[i].drop_date}`;
    const newDate = new Date(date);
    const formattedDate = `${day[newDate.getDay()]} ${newDate.getDay()}-${month[newDate.getMonth()]}-${newDate.getFullYear()}`;
    const truck = `${trips[i].truck_rego}`;
    const trailer_a = `${trips[i].trailer_a}`;
    const trailer_b = `${trips[i].trailer_b}`;
    const pay = `${trips[i].driver_1_pay}`;
    const comments = `${trips[i].comments}`
    const tripDetails = `${trips[i].load_from} -> ${trips[i].load_to}`;
    html += `<tr><td> ${formattedDate} </td><td> ${tripDetails} </td><td> ${truck} </td><td> ${trailer_a} </td><td> ${trailer_b} </td><td> ${pay} </td><td> ${comments} </td></tr>`;
  }
  
  html += `<tr>${driverEmail}</tr>
  </table>`;

  return (emailer.sendMail("harjindersinghrandhawa@gmail.com", "Test Number 1", html))

}


module.exports = {
  sendEmail,
};
