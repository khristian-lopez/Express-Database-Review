//Write our router here!
var express = require('express')
var router = express.Router()
var controller = require('./controllers')

const app = express()

router.get('/dogs', controller.getAll)

router.get('/dogs/:id', controller.get)

router.delete('/dogs/:id', controller.delete)

router.put('/dogs/:id', controller.update)

router.post('/dogs', controller.post)

module.exports = router;