const { Router } = require('express')
const router = Router()

const v1 = require('./v1/index') 
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../DOCS/openapi.json')



router.use('/api/', v1)
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))



module.exports = router
