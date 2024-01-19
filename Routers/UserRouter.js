const express = require('express')
const { login, SignUp, logOut } = require('../Controller/UserController')

const router = express.Router()


router.post('/signup', SignUp)
router.post('/login', login)
router.post('/logout/:id', logOut)
module.exports = router