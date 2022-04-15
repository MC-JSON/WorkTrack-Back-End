const Router = require('express').Router()
const controller = require('../controllers/BusinessController')

Router.get('/:ownerId', controller.GetBusinesses)
Router.post('/:ownerId/create-business', controller.CreateBusiness)
Router.put('/:ownerId/:businessId', controller.UpdateBusiness)
Router.delete('/:ownerId/:businessId', controller.DestroyBusiness)

module.exports = Router
