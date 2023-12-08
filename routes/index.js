const { Router } = require('express')
const router = Router()

const v1 = require('./v1/index') 


router.use('/api/', v1)


module.exports = router
