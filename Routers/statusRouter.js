const express = require('express')
const { createStatus, getAllStatus, getOneStatus, deleteOneStatus } = require('../Controller/StatusController')

const router = express.Router()

router.post('/createstatus', createStatus)
router.get('/getallstatus', getAllStatus)
router.get('/getonestatus/:id', getOneStatus)
router.delete('/deletestatus/:id', deleteOneStatus )
module.exports = router