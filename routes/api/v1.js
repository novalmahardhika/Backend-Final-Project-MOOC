const { Router } = require('express')
const router = Router()

const Auth = require('../../app/controllers/user')
const AuthMiddleware = require('../../middlewares/auth')
const Course = require('../../app/controllers/course')
const { uploadToMemory } = require('../../middlewares/uploadOnMemory.js');
const { uploadToCloudinary } = require ("../../middlewares/uploadOnCloudinary.js")

const isBodyNotNull = async (req, res, next) => {
  if (!Object.keys(req.body).length) {
    res.setHeader('Content-Type', 'application/json')
    res.status(400).json({ message: 'Body is missing.' })
    return
  }
  next()
}

// USER MANAGEMENT
// register admin
router.post('/admin/register', isBodyNotNull, AuthMiddleware.authorize, AuthMiddleware.isRoot, Auth.registerAdmin)

// register user
router.post('/register', isBodyNotNull, Auth.register)

// login user
router.post('/login', isBodyNotNull, Auth.login)

// get user
router.get('/users', AuthMiddleware.authorize, AuthMiddleware.isRootOrAdmin, Auth.findAll)

// get current user
router.get('/current-user', AuthMiddleware.authorize, Auth.currentUser)


// COURSE MANAGEMENT
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

module.exports = router
