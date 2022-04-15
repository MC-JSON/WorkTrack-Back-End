const Router = require('express').Router()
const controller = require('../controllers/EmployeeRouter')

Router.get('/:businessId', controller.GetEmployees)
Router.get('/:businessId/:employeeId', controller.GetEmployee)
Router.post('/:businessId', controller.CreateEmployee)
Router.put('/:businessId/:employeeId', controller.UpdateEmployee)
Router.delete('/:businessId/:employeeId', controller.DestroyEmployee)

module.exports = Router
