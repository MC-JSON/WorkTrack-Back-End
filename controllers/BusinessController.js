const { Business } = require('../models')

const GetBusiness = async (req, res) => {
  try {
    let businessId = parseInt(req.params.business_id)
    const business = await Business.findAll({
      where: { id: businessId }
    })
    return res.send(business)
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
    return res.send(business)
  } catch (error) {
    throw error
  }
}

const UpdateBusiness = async (req, res) => {
  try {
    let businessId = parseInt(req.params.business_id)
    let updatedBusiness = await Business.update(req.body, {
      where: { id: businessId },
      returning: true
    })
    return res.send(updatedBusiness)
  } catch (error) {
    throw error
  }
}

const DestroyBusiness = async (req, res) => {
  try {
    let businessId = parseInt(req.params.business_id)
    await Business.destroy({ where: { id: businessId } })
    return res.send({
      message: `Business with id of ${businessId} has been destroyed.`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetBusiness,
  CreateBusiness,
  UpdateBusiness,
  DestroyBusiness
}
