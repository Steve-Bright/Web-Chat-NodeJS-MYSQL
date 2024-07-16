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

connection.query(
    'SELECT * FROM `employees`',
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
)

connection.end()