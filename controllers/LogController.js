const { Log } = require('../models')

const GetBusinessLog = async (req, res) => {
  try {
    let businessId = parseInt(req.params.business_id)
    const log = await Log.findAll({ where: { businessId: businessId } })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetBusinessLog
}
