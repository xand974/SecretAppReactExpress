require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
require("./config/db.config");

app.listen(port, () => {
  console.log(`App running successfully on port ${port}`);
});
