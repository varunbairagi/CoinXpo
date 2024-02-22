let data = require("../tdata");
const User = require("../models/user-model");
var bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
};
const reg = async (req, res) => {
  try {
    const {email,username,password}= req.body;
    const userExist=await User.findOne({email:email})
    if(userExist){
        console.log("already exist");
        return res.status(400).json({msg:"Already Exist"})
    }



    const createdUser=await User.create({username,email,password})
    
    // res.status(200).send("Registered"+createdUser);
    res.status(201).json({msg:"registered",token:await createdUser.generateToken(),userId:createdUser._id.toString()})
    // console.log(createdUser)
  } catch (error) {
    res.status(500).send(error);
  }
};

const login= async (req,res)=>{
    try {
        const {email,password}=req.body;
        const userExist=await User.findOne({email:email})
        // console.log(password+userExist.password)
        if(!userExist){
            return res.status(400).json({msg:"Invalid Credentials"})
        }
        const user= await bcrypt.compare(password,userExist.password)
        // console.log(user)
        if(user){
            
            res.status(200).json({msg:"Login Successfully",token:await userExist.generateToken(),userId:userExist._id.toString()})
        }
        else{
            res.status(401).json({msg:"invalid id-password"})
        }
    } catch (error) {
        res.status(500).send(error);
    }
}


const user=async (req,res)=>{
    try {
      const userData=req.user
      console.log(userData)
      res.status(200).json({userData})
    } catch (error) {
      console.log(`error form sever ${error}`)
    }
}
module.exports = { home, reg ,login,user};
