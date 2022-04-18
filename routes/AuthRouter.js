const Router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

Router.post('/login', controller.Login)
Router.post('/register', controller.Register)
// router.put(
//   '/profile',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.UpdatePassword
// )

module.exports = Router