const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const express=require("express")
const cors=require("cors")
const auth_router=require("./router/auth-router")
const cart_router=require("./router/cart_router")
const {MongoClient}=require("mongodb")
const connectDB=require("./utils/db")
bodyParser = require('body-parser');
const app=express()

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended:false}))
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, accept, access-control-allow-origin');

  if ('OPTIONS' == req.method) res.sendStatus(200);
  else next();
});
app.use(cors())
app.options('*', cors());
app.use(cors({
  origin:"*",
  "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",
}));

let dburl=`mongodb+srv://varun-db:varun@atlascluster.gioplqo.mongodb.net/?retryWrites=true&w=majority`;

app.use("/api/auth",auth_router)
app.use("/api/user",cart_router)


connectDB()

app.get('/db',async (req,res)=>{
  const url =
        "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "11953919f1msha36b523db985331p136566jsnef85400936d7",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        const Cdata = await response.json();
        res.json(Cdata.data)
        // dispatch();
        // console.log(data);
      } catch (e) {
        console.log(e);
      }
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