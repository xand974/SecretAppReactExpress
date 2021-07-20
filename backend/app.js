require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
require("./middlewares/session.mongoose")(app);
require("./config/db.config");
const home_router = require("./routes/home.route");
const Error404 = require("./middlewares/page.not.found");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(home_router);

app.use(Error404);

app.listen(port, () => {
  console.log(`App running successfully on port ${port}`);
});
