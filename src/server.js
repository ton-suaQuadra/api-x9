require('dotenv').config()
require('../src/db/index.js')

const express = require("express");
const cors = require('cors')
const app = express();
const PORT = 3000 || process.env.PORT

app.use(express.json())
app.use(cors())

app.use('/api', require('./routes'))
app.get('/', (req, res) => res.json({msg: 'Server is running'}))


app.listen(PORT, () => console.log(`Runing on port ${PORT}`))