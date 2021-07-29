require("dotenv").config();
const express = require("express");
const app = express();
const port = 3001 || process.env.PORT;
require("./middlewares/session.mongoose")(app);
require("./config/db.config");
const helmet = require("helmet");
const morgan = require("morgan");
const home_router = require("./routes/home.route");
const Error404 = require("./middlewares/page.not.found");
const user_router = require("./routes/user.route");
const cors = require("cors");

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("common"));
app.use(express.urlencoded({ extended: true }));
app.use("/api/home", home_router);
app.use("/api/user", user_router);

app.use(Error404);

app.listen(port, () => {
  console.log(`App running successfully on port ${port}`);
});
