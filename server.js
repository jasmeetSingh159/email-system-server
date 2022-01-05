const express = require("express");

const bodyParser = require("body-parser");
const app = express();

const sendWeekNumberRouter = require("./routes/sendWeekNumber");
const totalPayRouter = require("./routes/totalPay");
const driverTripsRouter = require("./routes/getDriverTrips");
const sendEmailRouter = require("./routes/sendEmail");


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.use("/sendWeekNumber", sendWeekNumberRouter);

app.use("/totalPay", totalPayRouter);

app.use("/getDriverTrips", driverTripsRouter);

app.use("/sendEmail", sendEmailRouter);

app.listen(3001, () => {
 console.log("Server running on port 3001");
});