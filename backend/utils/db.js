const mongoose=require("mongoose")


const connectDB=async()=>{
    
    try {
        // await mongoose.connect("mongodb+srv://varun-db:varun@atlascluster.gioplqo.mongodb.net/?retryWrites=true&w=majority")
        await mongoose.connect(process.env.DB_URL)

        console.log("db succesfull")
        
    } catch (error) {
        console.log("db failed");
        process.exit(0);
    }
}
module.exports=connectDB