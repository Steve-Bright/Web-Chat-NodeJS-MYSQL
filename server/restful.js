const { createServer } = require("http")
const express = require("express")
const { Server } = require("socket.io");
const path = require("path")
const rooms = require("./routes/rooms");


const app = express();
const server = createServer(app)
const io = new Server(server);

app.set("view engine", "ejs")





app.use(express.static(path.join(__dirname, "..", "views", "clientScripts")))


app.get("/", (req, res) => 
    // res.sendFile("index.html", {root: path.join(__dirname, "..", "views")})
    res.render("index")
)

// app.get("/getData", async(req, res) => 
//     connection.query('SELECT * from employees', (err, rows) => {
//         if (err) throw err;
//         console.log('The data from users table are: \n', rows);
//         connection.end();
//     })
// )



app.use("/rooms", rooms)

// app.get("/roomOne", (req, res) => {
//     res.sendFile("roomOne.html", {root: path.join(__dirname, "..", "views")})
// })

// app.get("/roomTwo", (req, res) => {
//     res.sendFile("roomTwo.html", {root: path.join(__dirname, "..", "views")})
// })

// app.get("/roomThree", (req, res) => {
//     res.sendFile("roomThree.html", {root: path.join(__dirname, "..", "views")})
// })

server.listen(3000);