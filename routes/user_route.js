const express=require('express');
const user=require('../models/user');
const U_routes=express.Router();
U_routes.get('/Ecom/user/:id',(req,res,next)=>{
    user.findById({_id:req.params.id}).then(data=>{
        res.send(data);
    }).catch(next);
})
U_routes.post('/Ecom/user',(req,res,next)=>{
    user.create(req.body).then( data => {
        res.status(201).send(data);
    }).catch(next);
})
U_routes.put('/Ecom/user/:id',(req,res,next)=>{
    user.findByIdAndUpdate({_id:req.params.id},req.body,{useFindAndModify:false,new:true}).then(data=>{
        res.send(data)
    }).catch(next);
})
U_routes.delete('/Ecom/user/:id',(req,res,next)=>{
   user.findByIdAndDelete({_id:req.params.id},{useFindAndModify:false}).then(data=>{
       res.send(data)
   }).catch(next);
})
module.exports=U_routes;