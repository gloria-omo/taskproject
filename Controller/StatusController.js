const statusModel = require('../Model/statusModel')

exports.createStatus = async (req, res) => {
    try {
        const { title, desc } = req.body;

        const status = await statusModel.create({
            title,
            desc
        })
        console.log('status', status)
        
        res.status(201).json({
            message: 'Created successfully',
            data: status 
        })
    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
};

exports.getAllStatus = async (req,res)=>{
    try {
        const allStatus = await statusModel.find().populate('task');
        
        res.status(200).json({
            message: 'This all your Status',
            data:allStatus
        });
    } catch (error) {
        res.status(500).json({
            message:error.message
        });
    }
};

exports.getOneStatus = async (req, res) => {
    try {
        const id = req.params.id;
        const oneStatus = await statusModel.findById(id).populate('task')
        if(!oneStatus){
            return res.status(404).json({
                message: 'Status not found'
            })
        }
        res.status(200).json({
            message: "This is your Status",
            oneStatus
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteOneStatus = async (req, res) => {
    try {
        const id = req.params.id;
        const status = await statusModel.findByIdAndDelete(id);
        if(!status){
            return res.status(404).json({
                message: 'Status does not exist'
            })
        }
        res.status(200).json({
            message: 'Status deleted'
        })
    }catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}