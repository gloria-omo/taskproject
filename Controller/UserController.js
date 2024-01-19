const userModel = require('../Model/UserModel')
const myvalidation = require('../Validation/Validation')
exports.SignUp = async (req,res) =>{
    try {
       const data = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phoneNumber:req.body.phoneNumber,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword
      };
     
       const newUser = await userModel.create(data);
      console.log('Request Body:', req.body)
  

      await myvalidation.validateAsync(data,(err,data)=>{
        if(err){
          res.json(err.message)
        }else{
          res.json(data)
        }
      })

      //  newUser.password = password
       await newUser.save();
       console.log(newUser)
      if(!newUser){
        res.status(400).json({
            message:'Unable to Create a User'
        })
      }else{
        res.status(201).json({
            message:`A new User has been created`,
            data:newUser
        })
      }
      console.log('New User:', newUser)
    } catch (error) {
        res.status(400).json(error.message)
    }
}



exports.login = async (req,res) => {
  try {
    const {email,password} = req.body;
    const user = await userModel.findOne({email});
console.log(email)
console.log(password)
console.log(user)
    // if(!user){
    //   return res.status(401).json({
    //     message:'Invalid i credentials',
    //   });
    // }
    // if (user.password !== password){
    //   return res.status(401).json({
    //     message:'Invalid password',
    //   });
    // }


    if(!user){
      return res.status(401).json({
        message:'Invalid user',
      });
    }
    console.log(user)
    user.logOut = false
    await user.save()
  res.status(200).json({
  message:'Login succesful',
  data:user,
 })

  } catch (error) {
    res.status(500).json({
      message:'Error during Login',
      error:error.message
    });
  }

};


exports.logOut = async (req,res)=>{
    try {
        const id = req.params.id
        const user = await userModel.findById(id);
        
        if(!user){
            return res.status(404).json({
                message:'User does not exist'
            })
        }
        user.logOut = true
        await user.save()
        res.status(201).json({
            message:'Log Out successful'
        })
    } catch (error) {
        res.status(500).json({
            message:'Error logging out'
        })
    }
}