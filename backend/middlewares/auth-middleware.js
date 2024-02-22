const jwt =require("jsonwebtoken")
const User =require("../models/user-model")
const authMiddleware=async (req,res,next)=>{
    try {
        const token=req.header("Authorization");
        // console.log("giv",token);
        if(!token) {
            return res.status(401).json({msg:"token not provided"})
        }
        
        const jwtToken= token.replace("Bearer","").trim()
        
        const isVerified=jwt.verify(jwtToken,process.env.JWT_KEY)
        const userData=await User.findOne({email:isVerified.email}).select({password:0})
        req.user=userData
        req.token=token
        req.id=userData._id
        // console.log(userData)
        
        next();
    } catch (error) {
        res.status(500).json({msg:error})
        next();
    }

}
module.exports=authMiddleware