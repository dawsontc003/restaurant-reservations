const express = require("express");

const app = express();
const PORT = 9000;

const table = {
  name: "Joe",
  phoneNumber: "123456789",
  customerNumber: 123,
  customerId: 2,
};

app.get("/", (req, res) => {
  res.send("Welcome to the Hot Restaurant");
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
