const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = process.env.APP_SECRET

const hashPassword = async (password) => {
  let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
  return hashedPassword
}

const comparePassword = async (storedPassword, password) => {
  let passwordMatch = await bcrypt.compare(password, storedPassword)
  return passwordMatch
}

const createToken = (payload) => {
  let token = jwt.sign(payload, APP_SECRET)
  return token
}

const verifyToken = (req, res, next) => {
  const { token } = res.locals

  let payload = jwt.verify(token, APP_SECRET)
  if (payload) {
    res.locals.payload = payload
    console.log('token', res.locals.payload)
    return next()
  }
  res.status(401).send({ status: 'Error', msg: 'Unautho2rized' })
}

const stripToken = (req, res, next) => {
  console.log('header', req.headers[`authorization`])
  try {
    const token = req.headers[`authorization`].split(' ')[1]
    if (token) {
      res.locals.token = token
      return next()
    }
  } catch (error) {
    // res.send(error)
    // res.status(401).send({ status: 'Error', msg: 'Unauth3orized' })
    console.log(error)
  }
}

module.exports = {
  stripToken,
  verifyToken,
  createToken,
  comparePassword,
  hashPassword
}
