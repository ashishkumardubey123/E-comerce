const express = require('express');
const router= express.Router();

const ownerModel = require('../models/owner-model');

router.get('/', (req,res)=>{
     res.send('Hello from owner route')
})

if(process.env.NODE_ENV==="development"){

     router.post("/create", async (req,res)=>{

          res.send("hey it's working")
       let owners=   await ownerModel.find()
       if(owners.length>0)
     })
}


console.log(process.env.NODE_ENV)

module.exports= router 