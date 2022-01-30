const mysql = require('mysql2')

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'dogdb'
})

connection.connect()


//Tests local connection to database!
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

module.exports = connection