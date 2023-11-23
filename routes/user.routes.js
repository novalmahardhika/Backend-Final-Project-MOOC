const { Router } = require('express')
const router = Router()

const Auth = require('../app/controllers/user')
const AuthMiddleware = require('../middlewares/auth')

const isBodyNotNull = async (req, res, next) => {
  if (!Object.keys(req.body).length) {
    res.setHeader('Content-Type', 'application/json')
    res.status(400).json({ message: 'Body is missing.' })
    return
  }
  next()
}

// register admin
router.post(
  '/admin/register',
  isBodyNotNull,
  AuthMiddleware.authorize,
  AuthMiddleware.isRoot,
  Auth.registerAdmin
)
// register user
router.post('/register', isBodyNotNull, Auth.register)

// login user
router.post('/login', isBodyNotNull, Auth.login)

// get user
router.get(
  '/users',
  AuthMiddleware.authorize,
  AuthMiddleware.isRootOrAdmin,
  Auth.findAll
)
// get current user
router.get('/current-user', AuthMiddleware.authorize, Auth.currentUser)

module.exports = router