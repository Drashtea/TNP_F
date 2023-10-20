const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

//define user schema
const Student_details=new mongoose.Schema({

    firstName:{
        type:String,
        required:true
    },
    middleName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    Branch:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }, Date:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    SSC:{
        type:String,
        required:true
    },
    HSC:{
        type:String,
        required:true
    },
    BECGPA:{
        type:String,
        required:true
    },
    BEPERCENTAGE:{
        type:String,
        required:true
    },
    photo:{
        type:String,
    }
});

  //create collection
const Details=mongoose.model('StudentDetails',Student_details);
 module.exports=Details;  