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
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

app.use(cors());
//voir dans le navigateur le dossier avec les images
const path = require("path");

var upload = multer();
app.post("/api/upload", upload.single("file"), async (req, res) => {
  const {
    file,
    body: { name },
  } = req;

  console.log(file, name);

  try {
    await pipeline(
      file.stream,
      fs.createWriteStream(`${__dirname}/public/uploadImages/${name}`)
    );
    return res.send("file uploaded successfully");
  } catch (err) {
    return res.status(500).json("erreur : " + err);
  }
});

//à cette url , voir les images qui se trouvent dedans
//http://localhost:3001/images/DESCRIPTION4 (2).PNG
app.use("/images", express.static(path.join(__dirname, "public/uploadImages")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use(morgan("common"));

app.use("/api/home", home_router);
app.use("/api/user", user_router);

app.use(Error404);

app.listen(port, () => {
  console.log(`App running successfully on port ${port}`);
});
