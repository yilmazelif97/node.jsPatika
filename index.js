const express = require('express')  

const app = express()

//get request olduğunu belirtiyor. 
app.get('/',  (req, res) =>{
  res.status(200).send('Hello World')
})

app.get('/about',  (req, res) =>{
    res.status(200).send('about World')
  })

  
  app.get('/contact',  (req, res) =>{
    res.status(200).send('contact World')
  })

  app.get('*',(req,res)=>{
      res.status(404).send("404 not found ")
  })
  
const port =3000;

app.listen(port,()=>{
    console.log(`Bağlantı ${port} üzerinden kuruldu`)
})