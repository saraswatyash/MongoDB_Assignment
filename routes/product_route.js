const express=require('express');
const product=require('../models/product');
const P_routes=express.Router();
P_routes.get('/Ecom/Product/:id',(req,res,next)=>{
    product.findById({_id:req.params.id}).then(data=>{
        res.send(data);
    }).catch(next);
})
P_routes.post('/Ecom/Product',(req,res,next)=>{
    product.create(req.body).then( data => {
        res.status(201).send(data);
    }).catch(next);
})
P_routes.put('/Ecom/Product/:id',(req,res,next)=>{
    product.findByIdAndUpdate({_id:req.params.id},req.body,{useFindAndModify:false,new:true}).then(data=>{
        res.send(data)
    }).catch(next);
})
P_routes.delete('/Ecom/Product/:id',(req,res,next)=>{
    product.findByIdAndDelete({_id:req.params.id},{useFindAndModify:false}).then(data=>{
        res.send(data)
    }).catch(next);
})
module.exports=P_routes;