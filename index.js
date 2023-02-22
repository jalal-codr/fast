const express = require('express')
const app = express()
const mongoose = require("mongoose")
app.use(express.json());
const cors = require('cors')
app.use(cors({
    origin : "*",

}))
const arr = []

/*mongoose.set('strictQuery',false)

//DB connection
const mongoDB = "mongodb+srv://panda:panda@first.70gby0l.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoDB,()=>console.log("DB connection sucessful"))


const rr = ['hello']

//DB schema
const Schema = mongoose.Schema
const template = new Schema({
    id : Number,
    name : {
        type:String,
        required: true
    },
    pswd :{
        type : String,
        required : true
    }

})
const data = mongoose.model("MyTabel",template)*/


app.get('/',(req,res)=>{
    res.send('crazy panda !')
})


app.post ('/setpost',(req,res)=>{
    let data = {
            name : req.body.name,
            pswd : req.body.pswd
        }

    arr.push(data)
    res.send(data);
})


app.get('/post',(req,res)=>{
    res.send(arr)
})



const port = 7000 || process.env.Port
app.listen(port,()=> console.log(`server runing on ${port}`));