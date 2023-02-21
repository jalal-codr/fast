const express = require('express')
const app = express()
app.use(express.json());
const cors = require('cors')
app.use(cors())


const arr = ['hello']


app.get('/',(req,res)=>{
    res.send('crazy panda !')
})


app.post ('/setpost',(req,res)=>{
    let person = 
        {
            name : req.body.name,
            pswd : req.body.pswd
        }
    
    arr.push(person)
    res.send(person);
})


app.get('/post',(req,res)=>{
    res.send(arr)
})



const port = 7000 || process.env.Port
app.listen(port,()=> console.log(`server runing on ${port}`));