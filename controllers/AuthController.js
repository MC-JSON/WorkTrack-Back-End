const { Owner } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const owner = await Owner.findOne({
      where: { ownerEmail: req.body.ownerEmail },
      raw: true
    })
    if (
      owner &&
      (await middleware.comparePassword(owner.ownerPasswordDigest, req.body.ownerPassword))
    ) {
      let payload = {
        id: owner.id,
        ownerEmail: owner.ownerEmail
      }
      let token = middleware.createToken(payload)
      return res.send({ owner: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
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

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}
module.exports = {
  Login,
  Register,
  CheckSession
}