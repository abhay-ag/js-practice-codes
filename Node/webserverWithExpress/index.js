const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.end("Hello this is a demo webserver created using express");
})
app.listen(5000,()=>{
    console.log('Listening on port 5000')
})