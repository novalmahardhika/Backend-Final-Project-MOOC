const { UserCourse } = require('../models/index')


const findAll = async()=> {
  const data = await UserCourse.findAll()

  return data
}


module.exports = { findAll }