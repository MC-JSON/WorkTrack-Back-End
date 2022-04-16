const Router = require('express').Router()
const controller = require('../controllers/EmployeeController')

Router.get('/:business_id', controller.GetEmployees)
Router.get('/:business_id/:employee_id', controller.GetEmployee)
Router.post('/:business_id/:log_id', controller.CreateEmployee)
Router.put('/:employee_id', controller.UpdateEmployee)
Router.delete('/:employee_id', controller.DestroyEmployee)

module.exports = Router
