const express = require('express')
const app = express()
const port = 5001

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://leeeyez:vin3ent!@boilerplate.2k4eb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    //useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World! 하하하'))

app.listen(port, () => console.log('Example app listening on port ' + port + '!'))