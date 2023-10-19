const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

//define user schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:
    {
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
           token:{
            type:String,
            required:true
           } 
        }
    ]
});

  //create collection
 const userModel=mongoose.model('TNP_REGISTRATION',userSchema);
 module.exports=userModel;  