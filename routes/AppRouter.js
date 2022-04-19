const Router = require('express').Router()
const OwnerRouter = require('./OwnerRouter')
const BusinessRouter = require('./BusinessRouter')
const LogRouter = require('./LogRouter')
const EmployeeRouter = require('./EmployeeRouter')
const JobRouter = require('./JobRouter')
const EntryRouter = require('./EntryRouter')
const AuthRouter = require('./AuthRouter')
// const controller = require('../controllers/OwnerController')
// const middleware = require('../middleware')

Router.use('/Owners', OwnerRouter)
Router.use('/Businesses', BusinessRouter)
Router.use('/Logs', LogRouter)
Router.use('/Employees', EmployeeRouter)
Router.use('/Jobs', JobRouter)
Router.use('/Entries', EntryRouter)
Router.use('/auth', AuthRouter)


module.exports = Router
