const { Entry } = require('../models')

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
  CreateEntry,
  UpdateEntry,
  DestroyEntry
}
