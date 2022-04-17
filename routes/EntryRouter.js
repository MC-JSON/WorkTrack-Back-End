const Router = require('express').Router()
const controller = require('../controllers/EntryController')

Router.get('/', controller.GetAllEntries)
Router.get('/:log_id', controller.GetAllBusinessEntries)
Router.get('/:log_id/date-range-search', controller.GetEntriesByDateRange)
// Router.get('/:log_id/:month/:day/:year', controller.GetBusinessEntriesByDay)
// Router.get('/:log_id/:month/:year', controller.GetBusinessEntriesByMonth)
// Router.get('/:log_id/:year', controller.GetBusinessEntriesByYear)
Router.get(
  '/:log_id/employees/:employee_id',
  controller.GetAllEntriesForEmployee
)
Router.get(
  '/:log_id/employees/:employee_id/date-range-search',
  controller.GetEmployeeEntriesByDateRange
)
Router.post('/:log_id', controller.CreateEntry)
Router.put('/:entry_id', controller.UpdateEntry)
Router.delete('/:entry_id', controller.DestroyEntry)

module.exports = Router
