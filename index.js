const express = require('express')
// const { User } = require('./app/models/index.js');
const routes = require('./routes/index')
// const { uploadToMemory } = require('./middlewares/uploadOnMemory.js');
// import { uploadToCloudinary } from "./middlewares/uploadOnCloudinary.js"
const cors = require('cors')

const app = express()
const PORT = 80

app.use(cors())
app.use(express.json())
app.use('/', routes)

app.listen(PORT, () =>
  console.log('Server is live:  http://127.0.0.1:%d', PORT)
)
