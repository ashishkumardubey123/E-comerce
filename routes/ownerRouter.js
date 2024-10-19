const express = require('express');
const router= express.Router();
const ownerModel = require('../models/owner-model');

router.get('/', (req,res)=>{
     res.send('Hello from owner route')
})

// if(process.env===development){

//      router.post('/create', (req,res)=>{
//           res.send('Hello from owner route')
//      })
// }
// console.log(process.env.NODE_ENV)

module.exports= router