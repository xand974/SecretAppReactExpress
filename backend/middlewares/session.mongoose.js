const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

var store = new MongoDBStore({
  uri: process.env.DBCON,
  collection: "userSessions",
});

store.on("error", (err) => {
  console.log(err);
});

module.exports = (app) => {
  app.use(
    session({
      secret: process.env.SECRET,
      store,
      resave: false,
      saveUninitialized: false,
    })
  );
};
