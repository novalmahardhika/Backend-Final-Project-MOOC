const { Router } = require('express')
const router = Router()

const UserCourse = require('../../app/controllers/userCourse')

router.get('/my-course', UserCourse.list)

module.exports = router