const express = require('express')
const blog=require('../models/blog')
const router=express.Router();
router.get('/',async(req,res)=>{
    const result= await blog.find()
    res.status(200).json({
        data:result
    })
})
router.post('/create',async(req,res)=>{
    const {title,author,content}=req.body;
    try{
        blog.create({
            title,
            author,
            content
        })
        res.status(201).json({
            message:"Blog Created"   
        })
    }catch{
        res.status(402).json({
            message:"Error"   
        })
    }

})

router.route('/blog/:id')
.get(async(req,res)=>{
    const id =req.params.id;
    const result=await blog.findById(id)
    if(result){
    res.status(200).json({
        data:result   
    })}
    else{
        res.status(402).json({
            message:"Blog not found"   
        })
    }
})
.delete(async(req,res)=>{
    try{
        const id=req.params.id;
        const result=await blog.findByIdAndDelete(id);
    res.status(200).json({
        Message:"Blog Deleted"})
    }catch{
    res.status(402).json({
        Message:"Error"   
})
    }
    
})
.put(async(req,res)=>{
    try{
        const {title,author,content}=req.body;
        const id=req.params.id;
        const result=await blog.findByIdAndUpdate(id,{title,author,content});
        res.status(200).json({
            message:"Blog Updated",
            data:result
        })
    }catch{
        res.status(402).json({
            message:"Blog Not Found"
        })
    }
})

module.exports=router