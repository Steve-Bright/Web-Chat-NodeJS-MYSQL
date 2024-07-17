const express = require("express")
const bodyParser = require("body-parser")
const rooms = express.Router();
const users  = require("../model/model.js")


rooms.use(bodyParser.urlencoded({ extended: true }))

rooms.post("/", (req, res) => {
    // res.send("something else")
    // res.sendFile("userAsk.html", {root: path.join(__dirname, "..", "..", "views")})
    // const user = {
    //     user = 
    // }

    const user = {
        userName: req.body.userName
    }

    users.create(user, (err, data) => {
        if(err){console.log(err)}
        else{console.log("new user created " + data)}
    })

    res.send("Testing " + req.body.rooms)
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