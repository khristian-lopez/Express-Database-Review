const mysql = require('mysql2')

const connection = mysql.createConnection({
  user: 'root',
  database: ''
})

connection.connect()

module.exports = connection