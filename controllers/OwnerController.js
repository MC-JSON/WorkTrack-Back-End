const { Owner } = require('../models')

const GetOwner = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.owner_id)
    const owner = await Owner.findByPk(ownerId)
    res.send(owner)
  } catch (error) {
    throw error
  }
}

const CreateOwner = async (req, res) => {
  try {
    let newOwner = {
      ...req.body
    }
    let owner = await Owner.create(newOwner)
    res.send(owner)
  } catch (error) {
    throw error
  }
}

const UpdateOwner = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.owner_id)
    let updatedOwner = await Owner.update(req.body, {
      where: { id: ownerId },
      returning: true
    })
    res.send(updatedOwner)
  } catch (error) {
    throw error
  }
}

const DestroyOwner = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.owner_id)
    await Owner.Destroy({ where: { id: ownerId } })
    res.send({ message: `Owner with id of ${ownerId} has been removed` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetOwner,
  CreateOwner,
  UpdateOwner,
  DestroyOwner
}
