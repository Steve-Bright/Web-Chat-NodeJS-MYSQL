const mysql = require("../database/connection.js")

const User = function(user){
    this.user = user.name
}

User.create = (newUser,result ) => {

    const setClause = Object.entries(newUser)
        .map(([key, value]) => `${key} = "${value}"`)

    mysql.query(`INSERT INTO users SET ${setClause}`, (err, res) => {
        if(err){
            console.log("error: " + err)
            result(err, null)
            return
        }

        console.log("Created the temporary user: ", {id: res.insertId, ...newUser})
        result(null, {id: res.insertId, ...newUser})
    })
}

module.exports = User;