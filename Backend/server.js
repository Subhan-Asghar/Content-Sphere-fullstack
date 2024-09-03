const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000

//Connected Mongodb
mongoose.connect('mongodb://127.0.0.1:27017/blog')
  .then(() => console.log('Connected!'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})