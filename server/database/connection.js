const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'onepieceCC98',
    database: 'swamhtet_testing'
})


connection.connect((error) => {
    if(error){
        console.error("Error connecting to MYSQL database: ", error)
    }
    else{
        console.log("Connected to MYSQL database!")
    }
})

module.exports = connection;