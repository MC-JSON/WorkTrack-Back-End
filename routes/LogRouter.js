const Router = require('express').Router()
const controller = require('../controllers/LogController')

Router.get('/:business_id', controller.GetBusinessLog)

module.exports = Router
