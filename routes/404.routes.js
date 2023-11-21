const { Router } = require('express')
const router = Router()

router.get('*', (req, res) => {
  res.status(404).json({ message: '404 not found.' })
})

module.exports = router
