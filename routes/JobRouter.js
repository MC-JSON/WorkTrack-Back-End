const Router = require('express').Router()
const controller = require('../controllers/JobController')

Router.get('/', controller.GetJobs)
Router.post('/', controller.CreateJob)
Router.put('/:jobId', controller.UpdateJob)
Router.delete('/:jobId', controller.DestroyJob)

module.exports = Router
