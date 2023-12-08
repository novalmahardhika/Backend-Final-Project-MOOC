const { Router } = require('express')
const router = Router()

const UserCourse = require('../../app/controllers/userCourse')

router.get('/user-course', UserCourse.list)

module.exports = router