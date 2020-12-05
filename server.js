const express = require("express");

const app = express();
const PORT = 9000;

const tables = [
  { name: "Joe", phoneNumber: "123456789", customerNumber: 123, customerId: 2 },
];

const waitList = [];

app.get("/", (req, res) => {
  res.send("Welcome to the Hot Restaurant");
});

app.get("/makereservation", (req, res) => {
  res.send("Make Reservation");
});

app.get("/viewtables", (req, res) => {
  res.send(tables);
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
