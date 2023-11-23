const { Router } = require('express')
const router = Router()

const Course = require('../app/controllers/course')
const { uploadToMemory } = require('../middlewares/uploadOnMemory.js');
const { uploadToCloudinary } = require ("../middlewares/uploadOnCloudinary.js")

//Get ist
router.get("/", Course.list)

//Create new data
router.post("/", uploadToMemory, uploadToCloudinary, Course.create)

//Update data by ID
router.put("/:id", Course.findAndSetById, uploadToMemory, uploadToCloudinary, Course.update)

//Delete data by ID
router.delete("/:id", Course.findAndSetById, Course.destroyById)

//Get data detail from ID
router.get("/:id", Course.findAndSetById, Course.detail)

module.exports = router