const express=require('express');
const category=require('../models/category');
const C_routes=express.Router();
C_routes.get('/Ecom/Category/:id',(req,res,next)=>{
    category.findById({_id:req.params.id}).then(data=>{
        res.send(data);
    }).catch(next);
})
C_routes.post('/Ecom/Category',(req,res,next)=>{
    category.create(req.body).then( data => {
        res.status(201).send(data);
    }).catch(next);
})
C_routes.put('/Ecom/Category/:id',(req,res,next)=>{
    category.findByIdAndUpdate({_id:req.params.id},{Name:req.body.Name},{useFindAndModify:false,new:true})
    .then(data=>{
        res.send(data)
    }).catch(next);
})
C_routes.delete('/Ecom/Category/:id',(req,res,next)=>{
    category.findByIdAndDelete({_id:req.params.id},{useFindAndModify:false}).then(data=>{
        res.send(data)
    }).catch(next);
})
module.exports=C_routes;