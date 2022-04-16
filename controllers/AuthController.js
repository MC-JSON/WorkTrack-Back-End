const { Owner } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const owner = await Owner.findOne({
      where: { ownerEmail: req.body.email },
      raw: true
    })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { ownerEmail, ownerPassword, ownerName } = req.body
    let ownerPasswordDigest = await middleware.hashPassword(ownerPassword)
    const owner = await Owner.create({ ownerEmail, ownerPasswordDigest, ownerName })
    res.send(owner)
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  Register
}