const express=require("express")

const router=express.Router()

const {userData,setCart,orderData}=require("../controllers/user-controller")
router.route("/data").post(userData)
router.route("/update/:id").patch(setCart)
router.route("/order/:id").post(orderData)



module.exports=router