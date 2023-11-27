const { Router } = require('express')
const router = Router()

const Course = require('../app/controllers/course')
const  Chapter = require('../app/controllers/courseChapter')
const { uploadToMemory } = require('../middlewares/uploadOnMemory.js');
const { uploadToCloudinary } = require ("../middlewares/uploadOnCloudinary.js")

// Get ist
router.get("/course", Course.list)

// Create new data
router.post("/course", uploadToMemory, uploadToCloudinary, Course.create)

// Update data by ID
router.put("/course/:id", Course.findAndSetById, uploadToMemory, uploadToCloudinary, Course.update)

// Delete data by ID
router.delete("/course/:id", Course.findAndSetById, Course.destroyById)

// Get data detail from ID
router.get("/course/:id", Course.findAndSetById, Course.detail)



//  chapter
router.post("/course/:id/chapter", Chapter.create )
router.get("/course/:id/chapter", Chapter.findAll )
router.get("/course/:id/chapter/:chapterId", Chapter.findByPk, Chapter.detail )
router.put("/course/:id/chapter/:chapterId", Chapter.findByPk, Chapter.update )
router.delete("/course/:id/chapter/:chapterId", Chapter.findByPk, Chapter.destroy )


module.exports = router