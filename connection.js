const mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/crud').then(()=>{
    console.log("Connection Sucessfully");
}).catch((e)=>{
    console.log(e)
})

const schema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

const userDetails=mongoose.model("User", schema);
module.exports=userDetails;