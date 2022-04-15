const Router = require('express').Router()
const controller = require('../controllers/EmployeeController')

Router.get('/:businessId', controller.GetEmployees)
Router.get('/:employeeId', controller.GetEmployee)
Router.post('/:businessId', controller.CreateEmployee)
Router.put('/:employeeId', controller.UpdateEmployee)
Router.delete('/::employeeId', controller.DestroyEmployee)

module.exports = Router
