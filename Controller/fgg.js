// const taskModel = require('../Model/UserModel')
// const statusModel = require('../Model/statusModel')
// const subTaskModel = require('../Model/SubTaskModel')

// exports.createTask = async (req, res) => {
//     try {
//         const id = req.params.id;

//         const task = await taskModel.findById(id)
//         if(user.logOut){
//             return res.status(400).json({
//                 message: 'You are not logged in'
//             })
//         }
//         const status = await statusModel.create({
//             title
//         })
//         console.log('New Task', task )
       
        
//         user.status.push(status._id)
//         task.post = user._id
        
//         // console.log
//         await user.save();
//         await task.save();

//         // Send a success response to the user
//         res.status(201).json({
//             message: 'Task created succesfully',
//             data: task
//         })

//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }