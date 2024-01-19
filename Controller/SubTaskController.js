const subTaskModel = require ('../Model/SubTaskModel')
const taskModel =  require('../Model/TaskModels')




exports.newSub = async (req, res) => {
    try {
        const id = req.params.id;

        const task = await taskModel.findById(id)
        console.log(task)

        if(!task){
            return res.status(404).json({
                message: 'Task does not exist'
            })
        }
        const sub = await subTaskModel.create(req.body);

         if(!sub){
                return res.status({
                    error:"an error occcur creating sub task"
                })       
         }
        
        task.subTask.push(sub._id)
        sub.task = task._id
        console.log('subTask', sub)
        // post the subTask into the subTask field in the task model
        // Save the changes into the database

        await task.save();
        await sub.save();

        // Send a success response to the user
        res.status(201).json({
            message: 'Sub Task created',
            data: sub
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}