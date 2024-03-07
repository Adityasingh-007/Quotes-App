const express=require('express')
const router=express();
const quot=require('../models/Quote')
// const router=require('express').Router();



router.get('/allquotes',async (req,res)=>{
    try{
        let allquotes=await quot.find({})
        res.status(200).json(allquotes)
    }
    catch(e){
        res.status(400).json({msg:"something went wrong"})
    }
})

router.post('/addquote',async (req,res)=>{

    let {text,author}=req.body;
    await quot.create({text,author})
    res.status(200).json({msg:"quote added succesfully"})
})

router.get('/quotes/:id',async (req,res)=>{
    
    let {id}=req.params;

    const quotesss=await quot.findById(id);

    res.status(200).json(quotesss)

})

module.exports=router