const express = require('express')
const { newSub } = require('../Controller/SubTaskController')

const router = express.Router()

router.post('/subtask/:id',newSub)

module.exports = router