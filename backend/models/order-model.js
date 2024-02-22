const {mongoose}=require("mongoose")

const orderSchema=new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
        
    },
    items:[{
        type:Object,require:true
    }],
    p_id:{type:String
    // ,require:true
    },
    amount:{type:String,require:true}},
    { timestamps: true } 
)

const orders =new mongoose.model("Order",orderSchema)
module.exports=orders