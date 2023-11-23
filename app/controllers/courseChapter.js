const courseService = require('../services/courseChapter.js')

const findAll = async (req, res) => {
  try {
    const chapter = await courseService.findAll()

    res.json({ status: 'OK', message: 'Success', data: chapter })
  } catch (error) {
    res.status(error.statusCode || 500).json({
      status: 'FAIl',
      message: error.message,
    })
  }
}

const findById = async (req, res) => {
  try {
    const _id = req.params.id
    const chapter = await courseService.findById(_id)

    res.json({ status: 'OK', message: 'Success', data: chapter })
  } catch (error) {
    res.status(error.statusCode || 500).json({
      status: 'FAIl',
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
      status: 'FAIl',
      message: error.message,
    })
  }
}

const update = async (req, res) => {
  try {
    const _id = req.params.id
    const payload = req.body

    const chapter = await courseService.update(_id, payload)

    res.json({ status: 'OK', message: 'Success', data: chapter })
  } catch (error) {
    res.status(error.statusCode || 500).json({
      status: 'FAIl',
      message: error.message,
    })
  }
}

const destroy = async (req, res) => {
  try {
    const _id = req.params.id

    await courseService.destroy(_id)

    res.json({ status: 'OK', message: 'Success' })
  } catch (error) {
    res.status(error.statusCode || 500).json({
      status: 'FAIl',
      message: error.message,
    })
  }
}

module.exports = { findAll, findById, create, update, destroy }
