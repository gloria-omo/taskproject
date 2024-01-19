const express = require('express')
const { createTask, getOneTask, updatetask, getAllTask } = require("../Controller/TaskController");

const router = express.Router()




router.post('/createtask/:statusId', createTask)
router.get('/getonetask/:id',getOneTask)
router.put('/update/:id',updatetask)
router.get('/getalltask', getAllTask)
module.exports = router