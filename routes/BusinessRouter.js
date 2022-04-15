const Router = require('express').Router()
const controller = require('../controllers/BusinessController')

Router.get('/:owner_id', controller.GetBusinesses)
Router.post('/:owner_id', controller.CreateBusiness)
Router.get('/:business_id', controller.GetBusiness)
Router.put('/:business_id', controller.UpdateBusiness)
Router.delete('/:business_id', controller.DestroyBusiness)

module.exports = Router
