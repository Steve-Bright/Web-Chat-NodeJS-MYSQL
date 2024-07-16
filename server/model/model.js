const mysql = require("../database/connection.js")

const User = function(user){
    this.user = user.name
}

User.create = (newUser,result ) => {
    mysql.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if(err){
            console.log("error: " + err)
            result(err, null)
            return
        }

        console.log("Created the temporary user: ", {id: res.insertId, ...userId})
        result(null, {id: res.insertId, ...userId})
    })
}

module.exports = User;