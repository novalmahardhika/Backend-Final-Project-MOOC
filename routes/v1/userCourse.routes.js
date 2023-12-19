const { Router } = require('express')
const router = Router()

const UserCourse = require('../../app/controllers/userCourse')

// get list user course
router.get('/user-courses', UserCourse.list)

module.exports = router