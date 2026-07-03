const um = require("../models/User");
const createuser = async (req,res)=>{
    const {name,email} = req.body;
    if(!name || !email){
        return res.status(400).json({
            message:"name and email are required",
            success:false
        });
    }
    try{
    const query = await um.create(req.body);
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
module.exports = {createuser};