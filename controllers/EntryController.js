const { Entry } = require('../models')
const { Op } = require('sequelize')

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

const GetBusinessEntriesByDay = async (req, res) => {
  try {
    let logId = parseInt(req.params.log_id)
    let month = parseInt(req.params.month)
    let day = parseInt(req.params.day)
    let year = parseInt(req.params.year)
    const entries = await Entry.findAll({
      where: { logId: logId, dateMonth: month, dateDay: day, dateYear: year }
    })
    res.send(entries)
  } catch (error) {
    throw error
  }
}

const GetBusinessEntriesByMonth = async (req, res) => {
  try {
    let logId = parseInt(req.params.log_id)
    let month = parseInt(req.params.month)
    let year = parseInt(req.params.year)
    const entries = await Entry.findAll({
      where: { logId: logId, dateMonth: month, dateYear: year }
    })
    res.send(entries)
  } catch (error) {
    throw error
  }
}

const GetBusinessEntriesByYear = async (req, res) => {
  try {
    let logId = parseInt(req.params.log_id)
    let year = parseInt(req.params.year)
    const entries = await Entry.findAll({
      where: { logId: logId, dateYear: year }
    })
    res.send(entries)
  } catch (error) {
    throw error
  }
}

const GetEntriesByDateRange = async (req, res) => {
  let logId = parseInt(req.params.log_id)
  let firstMonth = parseInt(req.query.firstMonth)
  let firstDay = parseInt(req.query.firstDay)
  let firstYear = parseInt(req.query.firstYear)
  let lastMonth = parseInt(req.query.lastMonth)
  let lastDay = parseInt(req.query.lastDay)
  let lastYear = parseInt(req.query.lastYear)

  try {
    const entries = await Entry.findAll({
      where: {
        dateMonth: {
          [Op.between]: [firstMonth, lastMonth]
        },
        dateDay: {
          [Op.between]: [firstDay, lastDay]
        },
        dateYear: {
          [Op.between]: [firstYear, lastYear]
        },
        logId: logId
      }
    })
    res.send(entries)
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

// const GetEntriesForEmployeeByDay = async (req,res) => {
//   try {
//     let employeeId = parseInt(req.params.employee_id)
//   } catch (error) {

//   }
// }

const GetEmployeeEntriesByDateRange = async (req, res) => {
  let logId = parseInt(req.params.log_id)
  let employeeId = parseInt(req.params.employee_id)
  let firstMonth = parseInt(req.query.firstMonth)
  let firstDay = parseInt(req.query.firstDay)
  let firstYear = parseInt(req.query.firstYear)
  let lastMonth = parseInt(req.query.lastMonth)
  let lastDay = parseInt(req.query.lastDay)
  let lastYear = parseInt(req.query.lastYear)
  try {
    const entries = await Entry.findAll({
      where: {
        dateMonth: {
          [Op.between]: [firstMonth, lastMonth]
        },
        dateDay: {
          [Op.between]: [firstDay, lastDay]
        },
        dateYear: {
          [Op.between]: [firstYear, lastYear]
        },
        logId: logId,
        employeeId: employeeId
      }
    })
    res.send(entries)
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
  GetBusinessEntriesByDay,
  GetBusinessEntriesByMonth,
  GetBusinessEntriesByYear,
  GetEntriesByDateRange,
  GetAllEntriesForEmployee,
  GetEmployeeEntriesByDateRange,
  CreateEntry,
  UpdateEntry,
  DestroyEntry
}
