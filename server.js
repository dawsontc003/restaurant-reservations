const express = require("express");

const app = express();
const PORT = 9000;

const tables = [
  { name: "Joe", phoneNumber: "1234567890", email: "j@gmail.com", id: 1 },
];
const waitList = [];

app.get("/", (req, res) => {
  res.send("Welcome to the Hot Restaurant");
});

app.get("/makereservation", (req, res) => {
  res.send("Make Reservation");
});

app.get("/api/tables", (req, res) => {
  res.send(tables);
});

app.get("/api/waitlist", (req, res) => {
  res.send(waitList);
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
