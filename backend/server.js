const express=require("express")
let data=require("./tdata.js")
const app=express()




app.get('/',(req,res)=>{
    // console.log(req.params)
    res.send(data)
})
app.get('/:id',(req,res)=>{
  const fetchD=async()=> { const url = `https://coinranking1.p.rapidapi.com/coin/${req.params.id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "11953919f1msha36b523db985331p136566jsnef85400936d7",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      res.send(result.data)
    //   dispatch(setCData(result.data));
      // console.log(result.data);
    } catch (error) {
      console.error(error);
    }}
    fetchD()
})

app.listen(8080,(err)=>{
    if(err)console.error(err)
    console.log("listening on port- http://localhost:8080/")
})