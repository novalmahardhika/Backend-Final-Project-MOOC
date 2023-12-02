const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.json({ status: "OK", message: 'Ping successfully' })
})

module.exports = router
