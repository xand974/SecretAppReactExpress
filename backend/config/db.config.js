const mongoose = require("mongoose");
mongoose
  .connect(process.env.DBCON, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log(err);
  });
