const { Router } = require('express')
const router = Router()

const Course = require('../app/controllers/course')
const Chapter = require('../app/controllers/courseChapter')
const Module = require('../app/controllers/courseChapterModule')


const { uploadToMemory } = require('../middlewares/uploadOnMemory.js');
const { uploadToCloudinary } = require("../middlewares/uploadOnCloudinary.js")

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
router.get("/chapter", Chapter.findAll )
router.get("/chapter/:chapterId", Chapter.findByPk, Chapter.detail )
router.put("/chapter/:chapterId", Chapter.findByPk, Chapter.update )
router.delete("/chapter/:chapterId", Chapter.findByPk, Chapter.destroy )
// create chapter, why using endpoint course ? because we need assign course id as a value for field courseId
router.post("/course/:id", Chapter.create )


//  module
router.get("/module", Module.findAll )
router.get("/module/:moduleId", Module.findSetById, Module.detail )
router.put("/module/:moduleId", Module.update )
router.delete("/module/:moduleId",  Module.findSetById ,Module.destroy )
// create module, why using endpoint chapter ? because we need assign chapter id as a value for field chapterId
router.post("/chapter/:chapterId", Module.create )



module.exports = router