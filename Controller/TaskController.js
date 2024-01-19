const userModel = require('../Model/UserModel')
const statusModel = require('../Model/statusModel')
const taskModel = require('../Model/TaskModels')
const subTaskModel = require('../Model/SubTaskModel')


exports.createTask = async (req,res)=>{
  try {
    const id = req.params.statusId;
    const {title, desc, userId} = req.body;
    
    const status = await statusModel.findById(id)
    const user = await userModel.findById(userId)
    
    if(!user || user.logOut){
      return res.status(400).json({
        message:'You are not logged in'
      });
    }

    if(!status){
      return res.status(400).json({
        message:'Status not found'
      });
    }

    const task = await taskModel.create({
      title,
      desc
    });
   

    status.task.push(task._id);
    task.status = id

    await status.save()
    await task.save();

    res.status(201).json({
      message:'Task created successfully',
      data:task
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

exports.getOneTask = async (req,res)=>{
  try{
    const id = req.params.id
    const task = await taskModel.findById(id).populate("subTask");
    if (!task){
      return res.status(401).json({
        message: "task not found"
      })
    }
    else{
      return res.status(200).json({
        message: 'task found',
        data:task
      })
    }

  }catch(error){
    res.status(500).json({
      message:error.message
    })
  }
}

exports.updatetask = async (req,res)=>{
try{
  const id = req.params.id
  const {title,desc}= req.body
  const updatedtask = await taskModel.findByIdAndUpdate(id,{title,desc},{new:true})

  if(!updatedtask){
    return res.status(400).json({
      message:'Task not updated',
    })
  }
  else{
    return res.status(200).json({
      message: "updated successfully",
      data:updatedtask
    })
  }
}catch(error){
  res.status(500).json({
    message: error.message
  })
}

}

exports.getAllTask = async (req,res)=>{
  try{
    const task = await taskModel.find().populate("subTask");
    if (!task){
      return res.status(401).json({
        message: "task not found"
      })
    }
    else{
      return res.status(200).json({
        message: 'task found',
        data:task
      })
    }

  }catch(error){
    res.status(500).json({
      message:error.message
    })
  }
}













//exports.createTask = async (req, res) => {
  //   try {
  //      const id = req.params.id
  //       const { title } = req.body;
  
  //       const user = await userModel.findById(id)
  //       if(user.logOut){
  //         return res.status(400).json({
  //           message:'You are not logged in'
  //         })
  //       }
  //       const newTask = await taskModel.create({
  //           User:id,
  //           title
            
  //       })
  //       console.log('New Task', newTask)
        
  //       res.status(201).json({
  //           message: `${title} created successfully`,
  //           data: newTask 
  //       })
  //   } catch(error) {
  //       res.status(500).json({
  //           message: error.message
  //       })
  //   }
  // };