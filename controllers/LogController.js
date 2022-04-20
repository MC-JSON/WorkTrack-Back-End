const { Log } = require('../models')

const GetBusinessLog = async (req, res) => {
  try {
    let businessId = parseInt(req.params.business_id)
    const log = await Log.findAll({ where: { businessId: businessId } })
    res.send(log)
  } catch (error) {
    throw error
  }
}

const CreateLog = async (req, res) => {
  try {
    let businessId = parseInt(req.params.business_id)
    let newLog = {
      businessId
    }
    let log = await Log.create(newLog)
    res.send(log)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetBusinessLog,
  CreateLog
}
