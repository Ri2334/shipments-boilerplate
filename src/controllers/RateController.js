const um = require("../models/Rate");
const createrate = async (req,res)=>{
    const {type,fromLocation,toLocation,
        validFrom , validTo ,price,
        currency,transitDays
    } = req.body;
    if(!type || !fromLocation || !toLocation || 
        !validFrom || !validTo || !price ||
        !currency || !transitDays
     ){
        return res.status(400).json({
            message:"all fields are required",
            success:false
        });
    }
    if(type !== 'BUY' && type !=='SELL'){
        return res.status(400).json({
            message:"type must be either BUY or SELL",
            success:false
        });
    }
    if(price<0){
        return res.status(400).json({
            message:"price must be greater than 0",
            success:false
        });
    }
    if(transitDays<0){
        return res.status(400).json({
            message:"transitDays must be greater than 0",
            success:false
        });
    }
    try{
    const query = await um.create(req.body);
    res.status(200).json({
        message:"Rate created successfully",
        success:true
    })
    }
    catch(error){
        return res.status(500).json({
            message:"Something went wrong, please try again",
            success:false
        });
    }
};
module.exports = {createrate};