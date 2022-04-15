const Router = require('express').Router()
const controller = require('../controllers/JobController')

Router.get('/:business_id', controller.GetJobs)
Router.post('/:business_id', controller.CreateJob)
Router.put('/:job_id', controller.UpdateJob)
Router.delete('/:job_id', controller.DestroyJob)

module.exports = Router
