//Write our models here!
var db = require('./index')

module.exports = {
  getAll: (callback) => {
    let queryString = 'SELECT * FROM dogs;'
    db.query(queryString, (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  },
  get: (dogId, callback) => {
    let queryString = 'SELECT * FROM dogs WHERE id = ?;'
    db.query(queryString, [dogId], (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  },
  post: (dogData, callback) => {
    var {name, breed, age, owner} = dogData
    let queryString = 'INSERT INTO dogs VALUES(null, ?, ?, ?, ?);'
    db.query(queryString, [name, breed, age, owner], (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  },
  update: (dogId, dogAge, callback) => {
    var {newAge} = dogAge
    let queryString = 'UPDATE dogs SET age = ? WHERE id = ?'
    db.query(queryString, [newAge, dogId], (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  },
  delete: (dogId, callback) => {
    let queryString = 'DELETE FROM dogs WHERE id = ?;'
    db.query(queryString, [dogId], (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  }
}