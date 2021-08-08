const io = require("socket.io")(8080, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

function addUser(userId, socketId) {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
}

function removeUser(socketId) {
  users = users.filter((user) => user.socketId !== socketId);
}

io.on("connection", (socket) => {
  socket.on("sendUser", (res) => {
    console.log("user connected");
    addUser(res, socket.id);
    io.emit("newUsers", users);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
    removeUser(socket.id);
    io.emit("newUsers", users);
  });
});
