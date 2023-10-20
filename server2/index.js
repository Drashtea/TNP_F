const express=require('express')
const mongoose=require('mongoose');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const userModel=require('./model/TNPRegistration');
const studentDetails=require('./model/StudentDetails');
const multer = require('multer');
const path=require('path');

const app=express();

//means when we pass data that would be in json format
app.use(express.json());
const corsOptions={
    origin:['http://localhost:3000'],
    methods:["GET","POST"],
    credentials:true
}
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser())


//to connect to mongodb
const db='mongodb+srv://drashtypatel023:fJOPQNaYkEilh17V@cluster0.cnvsi26.mongodb.net/mernstack?retryWrites=true&w=majority';

mongoose.connect(db,{
    useNewUrlParser:true,
}).then(()=>{
    console.log("Connection successful");
}).catch((err)=>{
    console.log(err)
});


//interact with db
app.post('/register',async(req,res)=>{
    const {name,email,phone,password,cpassword}=req.body;
    if(!name || !email || !phone || !password || !cpassword)
    {
        console.log("not valid param");
    }
    else
    {
            const emailExists=await  userModel.findOne({email:email});
            if(emailExists){
                console.log("Email exists");
                this.status=555;
                res.json({status:555});
            }
            else if(password!=cpassword)
            {
                console.log("Password not matching");
            }
            else
            {
               userModel.create({name,email,phone,password,cpassword}).then(user=>res.json({status:"success"})).catch(err=>res.json(err));
            }
    }
})

app.post('/login',async(req,res)=>{
    const{email,password}=req.body;
    userModel.findOne({email:email}).then(user=>{
        if(user)
        {
           if(password==user.password)
           {
            console.log("same password");
                /*  const token=jwt.sign({email:user.email,role:user.role},"jwt-secret-key",{expiredIn:'id'})
                res.cookie('token',token) */
                return res.json("success")
           }
           else
           {
            return res.json("The password was incorrrect");
           }
        }
        else
        {
            return res.json("No record existed");
        }
    })
})

app.post('/Studentlogin',async(req,res)=>{
    const{lemail,lpassword}=req.body;
    userModel.findOne({email:lemail}).then(user=>{
        if(user)
        {
           if(lpassword==user.password)
           {
            console.log("same password");
                /*  const token=jwt.sign({email:user.email,role:user.role},"jwt-secret-key",{expiredIn:'id'})
                res.cookie('token',token) */
                return res.json("success")
           }
           else
           {
            return res.json("The password was incorrrect");
           }
        }
        else
        {
            return res.json("No record existed");
        }
    })
})

app.post('/studentdetails',(req,res)=>{
    studentDetails.find().then(users=>res.json(users)).catch(err=>res.json(err));
})


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/src/profile_pictures/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null,uniqueSuffix+file.originalname);

    }
  })
  
  const upload = multer({ storage: storage })

app.post('/registration',upload.single('image'), async(req,res)=>{

    const imageName=req.file.filename;


   const {fname,mname,lname,branch,year,phone,dob,email,address,ssc,hsc,BECGPA,BEPERCENTAGE,image
   }=req.body;
   console.log(image);
  
  /*  if(!fname || !mname ||!lname ||!branch ||!year ||!phone ||!dob ||!email ||!address ||!ssc ||!hsc || !BECGPA || !BEPERCENTAGE || !image)
    {
        console.log("not valid param");
    } */
    
    {
            const emailExists=await  studentDetails.findOne({email:email});
            if(emailExists){
                console.log("Email exists");
                this.status=555;
                res.json({status:555});
            }
            else
            {
                studentDetails.create({firstName:fname,middleName:mname,lastName:lname,Branch:branch,year:year, phone:phone,Date:dob,Email:email,Address:address,SSC:ssc,HSC:hsc,BECGPA:BECGPA,BEPERCENTAGE:BEPERCENTAGE,photo:imageName}).then(() => {
                   
                    res.status(201).json({ status: "ok" }); 
                    console.log("added details")
                  })
                  .catch((err) => {
                    res.status(500).json(err); 
                    console.log("failed adding details");
                  });
            }
    }
     
})


app.listen(3001,()=>{
    console.log("Server is running on port 3001");
})

