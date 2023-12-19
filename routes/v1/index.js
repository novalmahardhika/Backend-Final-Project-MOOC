const { Router } = require('express')
const router = Router()
const authRoute = require('./user.routes')
const courseRoute = require('./course.routes')
// const userCourse = require('./userCourse.routes')
const orderRouter = require('./order.routes')
// const chapterRoute = require('./chapter.routes')
const notFoundRoute = require('./404.routes')
const rootRouter = require('./root.routes')
// const chapterModuleRoute = require('./module.routes')


// tes ping router
router.use('/v1', rootRouter)

// routes controller
router.use('/v1/', authRoute)
router.use('/v1/', courseRoute)
// router.use('/v1/', userCourse)

router.use('/v1/', orderRouter)
// router.use('/api/v1/', chapterModuleRoute)


// 404 router
router.use('*', notFoundRoute)

module.exports = router
