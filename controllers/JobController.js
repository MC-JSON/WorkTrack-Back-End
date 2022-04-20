const { Job } = require('../models')

const GetJobs = async (req, res) => {
  try {
    let businessId = parseInt(req.params.business_id)
    const jobs = await Job.findAll({ where: { businessId: businessId } })
    res.send(jobs)
  } catch (error) {
    throw error
  }
}

const CreateJob = async (req, res) => {
  try {
    let businessId = parseInt(req.params.business_id)
    let newJob = {
      businessId,
      ...req.body
    }
    let job = await Job.create(newJob)
    res.send(job)
  } catch (error) {
    throw error
  }
}

const UpdateJob = async (req, res) => {
  try {
    let jobId = parseInt(req.params.job_id)
    let updatedJob = await Job.update(req.body, {
      where: { id: jobId },
      returning: true
    })
    res.send(updatedJob)
  } catch (error) {
    throw error
  }
}

const DestroyJob = async (req, res) => {
  try {
    let jobId = parseInt(req.params.job_id)
    await Job.destroy({ where: { id: jobId } })
    res.send({ message: `Job with id of ${jobId} has been removed.` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetJobs,
  CreateJob,
  UpdateJob,
  DestroyJob
}
