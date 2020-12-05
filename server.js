const express = require("express");
const path = require("path");

const app = express();
const PORT = 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
  { name: "Joe", phoneNumber: "1234567890", email: "j@gmail.com", id: 1 },
];
const waitList = [];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./home.html"));
});

app.get("/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, "./reserve.html"));
});

app.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, "./tables.html"));
});

app.get("/api/tables", (req, res) => {
  res.send(tables);
});

app.get("/api/waitlist", (req, res) => {
  res.send(waitList);
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
