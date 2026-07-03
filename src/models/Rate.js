const mongoose = require("mongoose");
const rateschema = new mongoose.Schema({
    type:{
        type:String,
        required:true
    },
    fromLocation:{
        type:String,
        required:true
    },
    toLocation:{
        type:String,
        required:true
    },
    validFrom:{
        type:Date,
        required:true
    },
    validTo:{
        type:Date,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    currency:{
        type:String,
        required:true
    },
    transitDays:{
        type:Number,
        required:true
    }

});
module.exports = mongoose.model("Rate",rateschema);