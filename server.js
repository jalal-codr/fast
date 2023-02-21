const express = require('express')
const app = express()
app.use(express.json());

const arr = ['hello']

app.get('/',(req,res)=>{
    res.send('hello world')
})


app.post ('/post',(req,res)=>{
    const person = {
        name : req.body.name,
        age : req.body.age
    }
    arr.push(person)
    console.log('person saved')
})


app.get('/post',(req,res)=>{
    res.send(arr)
})



const port = 7000 || process.env.Port
app.listen(port,()=> console.log(`server runing on ${port}`));