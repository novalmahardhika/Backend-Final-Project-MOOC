const { Router } = require('express')
const router = Router()
const authRoute = require('./user.routes')
const courseRoute = require('./course.routes')
// const chapterRoute = require('./chapter.routes')
const notFoundRoute = require('./404.routes')
const rootRouter = require('./root.routes')
// const chapterModuleRoute = require('./module.routes')

// swagger
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../DOCS/openapi.json')

// tes ping router
router.use('/', rootRouter)

// routes controller
router.use('/api/v1/', authRoute)
router.use('/api/v1/', courseRoute)
// router.use('/api/v1/', chapterRoute)
// router.use('/api/v1/', chapterModuleRoute)

// api documentation
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// 404 router
router.use('*', notFoundRoute)

module.exports = router
