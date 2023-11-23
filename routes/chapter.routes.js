const { Router } = require('express')
const router = Router()

const Chapter = require('../app/controllers/courseChapter')

router.post('/chapter', Chapter.create)
router.get('/chapter', Chapter.findAll)
router.get('/chapter/:id', Chapter.findById)
router.put('/chapter/:id', Chapter.update)
router.delete('/chapter/:id', Chapter.destroy)

module.exports = router
