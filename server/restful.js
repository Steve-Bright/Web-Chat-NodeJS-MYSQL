const { createServer } = require("http")
const express = require("express")
const { Server } = require("socket.io");
const path = require("path")
const rooms = require("./routes/rooms");

const app = express();
const server = createServer(app)
const io = new Server(server);

app.set("view engine", "ejs")

app.get("/", (req, res) => 
    // res.sendFile("index.html", {root: path.join(__dirname, "..", "views")})
    res.render("index")
)

app.use("/rooms", rooms)

server.listen(3000);
