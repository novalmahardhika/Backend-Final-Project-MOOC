const { Router } = require('express')
const router = Router()

const Course = require('../../app/controllers/course.js')
const Chapter = require('../../app/controllers/courseChapter.js')
const Module = require('../../app/controllers/courseChapterModule.js')
const AuthMiddleware = require('../../middlewares/auth')
const UserCourse = require('../../app/controllers/userCourse')

const { uploadToMemory } = require('../../middlewares/uploadOnMemory.js');
const { uploadToCloudinary } = require("../../middlewares/uploadOnCloudinary.js")

// Get List
router.get("/courses",AuthMiddleware.authorize2, Course.list)

// Create new data
router.post("/courses",AuthMiddleware.authorize, AuthMiddleware.isRootOrAdmin, uploadToMemory, uploadToCloudinary, Course.create)

// Update data by ID
router.put("/courses/:id", AuthMiddleware.authorize, AuthMiddleware.isRootOrAdmin,Course.findAndSetById, uploadToMemory, uploadToCloudinary, Course.update)

// Delete data by ID
router.delete("/courses/:id",AuthMiddleware.authorize, AuthMiddleware.isRootOrAdmin, Course.findAndSetById, Course.destroyById)

// Get data detail from ID
router.get("/courses/:id",AuthMiddleware.authorize2, Course.findAndSetById, UserCourse.findOneAndSet, Course.detail)



//  chapter

// Get List Chapter
router.get("/chapters", Chapter.findAll )

// Get Detail Chapter
router.get("/chapters/:chapterId", Chapter.findByPk, Chapter.detail )

// Update Chapter
router.put("/chapters/:chapterId",AuthMiddleware.authorize, AuthMiddleware.isRootOrAdmin, Chapter.findByPk, Chapter.update )

// Delete Chapter
router.delete("/chapters/:chapterId",AuthMiddleware.authorize, AuthMiddleware.isRootOrAdmin, Chapter.findByPk, Chapter.destroy )
// create chapter, why using endpoint course ? because we need assign course id as a value for field courseId

// Create Chapter
router.post("/courses/:id",AuthMiddleware.authorize, AuthMiddleware.isRootOrAdmin, Chapter.create )


//  module

// Get List Module
router.get("/modules", Module.findAll )

// Get Detail Module
router.get("/modules/:moduleId", AuthMiddleware.authorize2, Module.findSetById, Module.detail )

// Update Module
router.put("/modules/:moduleId",AuthMiddleware.authorize, AuthMiddleware.isRootOrAdmin, Module.update )

// Delete Module
router.delete("/modules/:moduleId",  AuthMiddleware.authorize, AuthMiddleware.isRootOrAdmin, Module.findSetById ,Module.destroy )

// create module, why using endpoint chapter ? because we need assign chapter id as a value for field chapterId

// Create Module
router.post("/chapters/:chapterId",AuthMiddleware.authorize, AuthMiddleware.isRootOrAdmin, Module.create )



module.exports = router