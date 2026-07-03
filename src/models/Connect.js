const mongoose = require("mongoose");
const connectschema = new mongoose.Schema({
    toUserId:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model("Connect",connectschema);