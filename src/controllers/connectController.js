const  cm = require("../models/Connect");
const createconn = async (req,res)=>{
    const {toUserId} = req.body;
    if(!toUserId){
        return res.status(400).json({
            message:"toUserId is required",
            success:false
        });
    }
    const userid = req.get('id') || req.headers['id'];
    if(userid===toUserId){
        return res.status(400).json({
            message:"A user cannot connect with themselves",
            success:false
        });
    }
    if(!userid){
        return res.status(404).json({
            message:"No user found with id u2",
            success:false
        });
    }
    try{
    const query = await cm.create(req.body);
    res.status(200).json({
        message:"Created user",
        success:true,
        data:query
    })
    }
    catch(error){
        return res.status(500).json({
            message:"Something went wrong, please try again",
            success:false
        });
    }
};
module.exports = {createconn};