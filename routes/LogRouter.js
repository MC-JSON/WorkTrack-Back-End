const Router = require('express').Router()
const controller = require('../controllers/LogController')

Router.get('/:business_id', controller.GetBusinessLog)
Router.post('/:business_id', controller.CreateLog)
module.exports = Router
