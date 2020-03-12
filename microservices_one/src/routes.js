const { Router } = require('express')

const routes = Router()

const User = require('./schema/User')

routes.post('/create', async (req, res) => {
  const { email, username, password } = req.body
  const user = await User.create({ email, username, password });
  return res.json(user)
})

module.exports = routes