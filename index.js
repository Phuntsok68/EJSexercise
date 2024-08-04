const express=require('express');
const app=express()

app.get('/',(req,res)=>{

    let r=Math.floor(Math.random()*10)+1;
    res.render('index.ejs',{
      rand:r
    })
})

app.listen(3000,()=>{
    console.log('The server is running on port 3000');
})