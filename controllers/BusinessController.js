const { Business } = require('../models')

const GetBusinesses = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.owner_id)
    const businesses = await Business.findAll({
      where: [{ ownerId: ownerId }]
    })
    res.send(businesses)
  } catch (error) {
    throw error
  }
}

const GetBusiness = async (req, res) => {
  try {
    // let ownerId = parseInt(req.params.owner_id)
    let businessId = parseInt(req.params.business_id)
    const business = await Business.findAll({
      where: { id: businessId }
    })
    res.send(business)
  } catch (error) {
    throw error
  }
}

const CreateBusiness = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.owner_id)
    const newBusiness = {
      ...req.body,
      ownerId
    }
    let business = await Business.create(newBusiness)
    res.send(business)
  } catch (error) {
    throw error
  }
}

const UpdateBusiness = async (req, res) => {
  try {
    // let ownerId = parseInt(req.params.owner_id)
    let businessId = parseInt(req.params.business_id)
    let updatedBusiness = await Business.update(req.body, {
      where: { id: businessId },
      returning: true
    })
    res.send(updatedBusiness)
  } catch (error) {
    throw error
  }
}

const DestroyBusiness = async (req, res) => {
  try {
    // let ownerId = parseInt(req.params.owner_id)
    let businessId = parseInt(req.params.business_id)
    await Business.destroy({ where: { id: businessId } })
    res.send({
      message: `Business with id of ${businessId} has been destroyed.`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetBusinesses,
  GetBusiness,
  CreateBusiness,
  UpdateBusiness,
  DestroyBusiness
}
