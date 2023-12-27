const express=require("express")
let data=require("./tdata.js")
const app=express()




app.get('/',(req,res)=>{
    // console.log(data)
    res.send(data)
})

app.listen(8080,(err)=>{
    if(err)console.error(err)
    console.log("listening on port- http://localhost:8080/")
})