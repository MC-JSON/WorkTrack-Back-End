const { Entry } = require('../models')
const { Op, Sequelize } = require('sequelize')
// const sequelize = new Sequelize('postgres')

const GetAllEntries = async (req, res) => {
  try {
    const entries = await Entry.findAll()
    res.send(entries)
  } catch (error) {
    throw error
  }
}

const GetAllBusinessEntries = async (req, res) => {
  try {
    let logId = parseInt(req.params.log_id)
    const entries = await Entry.findAll({ where: { logId: logId } })
    res.send(entries)
  } catch (error) {
    throw error
  }
}

const GetEntriesByDateRange = async (req, res) => {
  let logId = parseInt(req.params.log_id)
  let startDate = req.query.startDate
  let endDate = req.query.endDate

  try {
    const entries = await Entry.findAll({
      where: {
        date: {
          [Op.between]: [startDate, endDate]
        },
        logId: logId
      },
      order: [['date', 'DESC']]
    })
    const sum = await Entry.sum('employeeHours', {
      where: {
        date: {
          [Op.between]: [startDate, endDate]
        },
        logId: logId
      }
    })
    res.json({ entries, sum })
  } catch (error) {
    throw error
  }
}

const GetAllEntriesForEmployee = async (req, res) => {
  try {
    let logId = parseInt(req.params.log_id)
    let employeeId = parseInt(req.params.employee_id)
    const entries = await Entry.findAll({
      where: { logId: logId, employeeId: employeeId }
    })
    res.send(entries)
  } catch (error) {
    throw error
  }
}

const GetEmployeeEntriesByDateRange = async (req, res) => {
  let logId = parseInt(req.params.log_id)
  let employeeId = parseInt(req.params.employee_id)
  let startDate = req.query.startDate
  let endDate = req.query.endDate

  try {
    const entries = await Entry.findAll({
      where: {
        date: {
          [Op.between]: [startDate, endDate]
        },
        logId: logId,
        employeeId: employeeId
      },
      order: [['date', 'DESC']]
    })
    const sum = await Entry.sum('employeeHours', {
      where: {
        date: {
          [Op.between]: [startDate, endDate]
        },
        logId: logId
      }
    })
    res.json({ entries, sum })
  } catch (error) {
    throw error
  }
}

const CreateEntry = async (req, res) => {
  try {
    let logId = parseInt(req.params.log_id)
    let newEntry = {
      logId,
      ...req.body
    }
    let entry = await Entry.create(newEntry)
    res.send(entry)
  } catch (error) {
    throw error
  }
}

const UpdateEntry = async (req, res) => {
  try {
    let entryId = req.params.entry_id
    let updatedEntry = await Entry.update(req.body, {
      where: { id: entryId },
      returning: true
    })
    res.send(updatedEntry)
  } catch (error) {
    throw error
  }
}

const DestroyEntry = async (req, res) => {
  try {
    let entryId = parseInt(req.params.entry_id)
    await Entry.destroy({ where: { id: entryId } })
    res.send({ message: `Entry with id of ${entryId} has been removed` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllEntries,
  GetAllBusinessEntries,
  GetEntriesByDateRange,
  GetAllEntriesForEmployee,
  GetEmployeeEntriesByDateRange,
  CreateEntry,
  UpdateEntry,
  DestroyEntry
}
