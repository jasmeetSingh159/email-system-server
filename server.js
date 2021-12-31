const express = require("express");
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/sendWeekNumber", (req, res, next) => {
 res.json({success: "1", week: "29-W-21", validation: "FHT"});
});

app.listen(3001, () => {
 console.log("Server running on port 3001");
});