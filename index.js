const express = require('express')
// const { User } = require('./app/models/index.js');
const routes = require('./routes/index')
const { uploadToMemory } = require('./middlewares/uploadOnMemory.js');
const { uploadToCloudinary } = require ("./middlewares/uploadOnCloudinary.js")
const courseController = require("./app/controllers/course")
const cors = require('cors')

const app = express()
const PORT = 80

app.use(cors())
app.use(express.json())

app.get("/course", courseController.list)
app.post("/course",uploadToMemory,uploadToCloudinary, courseController.create)
app.put("/course/:id", courseController.findAndSetById, uploadToMemory, uploadToCloudinary, courseController.update)
app.delete("/course/:id",courseController.findAndSetById, courseController.destroy)
app.get("/course/:id", courseController.findAndSetById, courseController.detail)

app.use('/', routes)

app.listen(PORT, () =>
  console.log('Server is live:  http://127.0.0.1:%d', PORT)
)