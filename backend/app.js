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
const multer = require("multer");

//voir dans le navigateur le dossier avec les images
const path = require("path");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploadImages");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

var upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).send("file uploaded successfully");
  } catch (err) {
    console.log(err);
  }
});

//à cette url , voir les images qui se trouvent dedans
//http://localhost:3001/images/DESCRIPTION4 (2).PNG
app.use("/images", express.static(path.join(__dirname, "public/uploadImages")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(morgan("common"));

app.use("/api/home", home_router);
app.use("/api/user", user_router);

app.use(Error404);

app.listen(port, () => {
  console.log(`App running successfully on port ${port}`);
});
