const express=require("express")
let {home,reg, login}=require("../controllers/auth-controller")
const router=express.Router();

router.route("/").get(home)
router.route("/reg").post(reg)
router.route("/login").post(login)


module.exports=router