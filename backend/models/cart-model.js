const {mongoose}=require("mongoose")

const cartSchema=new mongoose.Schema({
    cart_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
        ,unique:true
    },
    values:[{
        type:Object,
        require:true,
        quantity:{type:Number,default:1},
        iconUrl:{type:String,require:true},
        name:{type:String,require:true},
        price:{type:Number,require:true},
        uuid:{type:String,require:true}

    }
    ],
})

const cart =new mongoose.model("cart",cartSchema)
module.exports=cart
