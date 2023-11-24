const courseService = require('../services/courseChapter.js')

const findAll = async (req, res) => {
  try {
    const chapter = await courseService.findAll()

    res.json({ status: 'OK', message: 'Success', data: chapter })
  } catch (error) {
    res.status(error.statusCode || 500).json({
      status: 'FAIL',
      message: error.message,
    })
  }
}

const findByPk = async (req, res, next) => {
  try {
    const { id } = req.params

    req.courseChapter = await courseService.findByPk(id)
    next()
  } catch (error) {
    res.status(error.statusCode || 500).json({
      status: 'FAIL',
      message: error.message,
    })
  }
}

const create = async (req, res) => {
  try {
    const payload = req.body
    const chapter = await courseService.create(payload)

    res.json({ status: 'OK', message: 'Success', data: chapter })
  } catch (error) {
    res.status(error.statusCode || 500).json({
      status: 'FAIL',
      message: error.message,
    })
  }
}

const update = async (req, res) => {
  try {
    const payload = req.body

    const chapter = await courseService.update(req.courseChapter.id, payload)
    res.json({ status: 'OK', message: 'Success', data: chapter })
  } catch (error) {
    res.status(error.statusCode || 500).json({
      status: 'FAIL',
      message: error.message,
    })
  }
}

const destroy = async (req, res) => {
  try {

    await courseService.destroy(req.courseChapter.id)

    res.json({ status: 'OK', message: 'Success', data: req.courseChapter })
  } catch (error) {
    res.status(error.statusCode || 500).json({
      status: 'FAIL',
      message: error.message,
    })
  }
}

const detail = (req, res) => {
  res.json({ status: 'OK', message: 'Success', data: req.courseChapter })
}

module.exports = { findAll, findByPk, create, update, destroy, detail }
