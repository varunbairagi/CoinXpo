const express=require("express")
let {home,reg, login,user}=require("../controllers/auth-controller")
const authMiddleware=require("../middlewares/auth-middleware")
const router=express.Router();

router.route("/").get(home)
router.route("/reg").post(reg)
router.route("/login").post(login)
router.route("/user").get(authMiddleware,user)
// router.route("/user").get((req,res)=>{
//     console.log(req.headers)
//     res.json({msg:"yes"})
// })


module.exports=router