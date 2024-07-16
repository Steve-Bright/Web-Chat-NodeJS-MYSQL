const express = require("express")
const path = require("path")
const rooms = express.Router();
console.log("here in rooms.js")

rooms.use("/", (req, res) => {
    // res.send("something else")
    // res.sendFile("userAsk.html", {root: path.join(__dirname, "..", "..", "views")})
    res.render("userAsk")
})

rooms.get("/roomOne", (req, res) => {
    // res.sendFile("roomOne.html", {root: path.join(__dirname, "..", "..", "views")})
    res.render("roomOne")
})

rooms.get("/roomTwo", (req, res) => {
    // res.sendFile("roomTwo.html", {root: path.join(__dirname, "..", "..", "views")})
    res.render("roomTwo")
})

rooms.get("/roomThree", (req, res) => {
    // res.sendFile("roomThree.html", {root: path.join(__dirname, "..", "..", "views")})
    res.render("roomThree")
})

module.exports = rooms;