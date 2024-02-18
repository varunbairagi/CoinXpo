const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken")
//crating user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

//before saving data we encrypt pssswd
userSchema.pre("save", async function (next) {
  const user = this;
  console.log("pre" + this);
  if (!user.isModified("password")) {
      next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hash_pswd =await bcrypt.hash(this.password, salt);
        // console.log(hash_pswd)
    this.password = hash_pswd;
  } catch (error) {
    next(error);
  }
});

// json web token jwt always store in local storeage or cokkies used for session authentication(check) and authorization(permissions)
userSchema.methods.generateToken=async function(){
    try {
        
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin
        },
         process.env.JWT_KEY,
         {
            expiresIn:"30d",
         }
        )
    } catch (error) {
        console.error(error)
    }
}

//making it collection formate
const User = new mongoose.model("User", userSchema);
module.exports = User;
