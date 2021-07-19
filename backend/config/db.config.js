const mongoose = require("mongoose");
mongoose
  .connect(process.env.DBCON)
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log(err);
  });
