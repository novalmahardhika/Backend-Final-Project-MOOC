const UserCourseService = require('../services/userCourse')

const list = async (req,res)=> {
  try {
      const data = await UserCourseService.findAll()
      
      res.status(200).json({
          status: 'OK',
          message: 'Success',
          data,
      })
  } catch (error) {
      res.status(error.statuscode || 500).json({
          status: 'FAIL',
          message: error.message,
      })
  }
}

module.exports = { list } 