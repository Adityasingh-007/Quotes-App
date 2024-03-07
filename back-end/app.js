const express=require('express')
const app=express()
const mongoose=require('mongoose')
const seedDb=require('./seed')
const quoteRoutes=require('./apis/quoteRoute')
const cors = require('cors')





mongoose.connect('mongodb://127.0.0.1:27017/Quote')
.then(()=>{console.log("db connected")})
.catch((err)=>{console.log(err)})

app.use(cors({origin: ['http://localhost:3000']}));

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({origin:['http://localhost:3000']}))

app.use(quoteRoutes)



app.get('/hello',(req,res)=>{
    res.status(200).json({msg:"hello from quotesapp"})
})

// seedDb()


const port=process.env.port||8080


app.listen(port,()=>{
    console.log(`server connected at ${port}`)
})