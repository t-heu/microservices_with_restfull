const express = require('express')
const app = express()

require('./database')

app.use(express.json())
app.use(require('./routes'))

app.listen(3003)
console.log('run')
