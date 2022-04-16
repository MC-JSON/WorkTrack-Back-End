const Router = require('express').Router()
const controller = require('../controllers/EntryController')

Router.get('/', controller.GetAllEntries)
Router.get('/:log_id', controller.GetAllBusinessEntries)
Router.post('/:log_id', controller.CreateEntry)
Router.put('/:entry_id', controller.UpdateEntry)
Router.delete('/:entry_id', controller.DestroyEntry)

module.exports = Router
