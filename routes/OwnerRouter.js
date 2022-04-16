const Router = require('express').Router()
const controller = require('../controllers/OwnerController')

Router.get('/:owner_id', controller.GetOwner)
Router.get('/', controller.GetOwners)
Router.post('/', controller.CreateOwner)
Router.put('/:owner_id', controller.UpdateOwner)
Router.delete('/:owner_id', controller.DestroyOwner)

module.exports = Router
