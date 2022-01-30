//Write our controllers here!
var models = require('../database/models')

module.exports = {
  getAll: (req, res) => {
    models.getAll((err, data) => {
      if (err) {
        console.log(err)
      } else {
        res.send(data)
      }
    })
  },
  get: (req, res) => {
    models.get(req.params.id, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        res.send(data)
      }
    })
  },
  post: (req, res) => {
    models.post(req.body, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        res.sendStatus(201)
      }
    })
  },
  update: (req, res) => {
    models.update(req.params.id, req.body, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        res.sendStatus(201)
      }
    })
  },
  delete: (req, res) => {
     models.delete(req.params.id, (err, data) => {
       if (err) {
         console.log(err)
       } else {
         res.sendStatus(200)
       }
     })
  }
}