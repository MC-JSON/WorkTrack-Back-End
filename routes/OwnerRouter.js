const Router = require('express').Router()
const controller = require('../controllers/OwnerController')
const middleware = require('../middleware')

Router.get(
  '/:owner_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetOwner
)
Router.get('/', controller.GetOwners)
Router.get(
  '/:owner_id/businesses',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.GetOwnerBusinesses
)
Router.put('/:owner_id', controller.UpdateOwner)
Router.delete('/:owner_id', controller.DestroyOwner)

module.exports = Router
