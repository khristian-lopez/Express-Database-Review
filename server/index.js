//Write our Express server here!
const controllers = require('./controllers');
const router = require('./router');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/', router);

/* app.get('/', (req, res) => {
  res.send('We are connected to port 3000')
}) */

app.listen(3000, (req, res) => {
  console.log('Connected to localhost:3000')
})
