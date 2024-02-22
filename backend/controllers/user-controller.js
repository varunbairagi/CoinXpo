const cart = require("../models/cart-model")
const order=require("../models/order-model")
const userData=async(req,res)=>{
    try {
        const {values,cart_id}=req.body

        const userExist=await cart.findOne({cart_id:cart_id})
        console.log(userExist)
        if(userExist){
            return res.status(400).json({msg:"aready exist cart"})
        }else{
        const cartData=await cart.create({values
            ,cart_id
        })
        console.log(cart_id)
        res.status(200).json({msg:true})}
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:error})
    }
}
const setCart=async(req,res)=>{
    try {
        const {values}=req.body
        const cart_id=req.params.id;
        console.log("va",values);
        const userExist=await cart.findOne({cart_id:cart_id})
        
        // if(!userExist){
        //     return res.status(400).json({msg:"Invalid Credentials"})
        // }
        const updatedData=await cart.updateOne({cart_id:cart_id},{
            $set:{values:values}
        })

        res.status(200).json({msg:updatedData})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:error})
    }
}

const orderData=async (req,res)=>{
    try {
        const {items,amount}=req.body
        const user_id=req.params.id;
        // const userExist=await cart.findOne({user_id})
        // console.log(userExist)
        
        const orderData=await order.create({items
            ,user_id,amount
        })
        console.log(orderData)
        res.status(200).json({msg:true})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:error})
    }
}
module.exports={userData,setCart,orderData}