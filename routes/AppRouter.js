const Router = require('express').Router()
const OwnerRouter = require('./OwnerRouter')
const BusinessRouter = require('./BusinessRouter')
const LogRouter = require('./LogRouter')
const EmployeeRouter = require('./EmployeeRouter')
const JobRouter = require('./JobRouter')

Router.use('/Owners', OwnerRouter)
Router.use('/Businesses', BusinessRouter)
Router.use('/Logs', LogRouter)
Router.use('/Employees', EmployeeRouter)
Router.use('/Jobs', JobRouter)

module.exports = Router
