require('../db/connection.js');
const Data=require('../model/dataSchema.js');
const express=require('express');
const router=express.Router();
const path=require('path');

// getdata api
router.get('/displaydata',function(req,res){

    Data.find(function(err,data){
        if(err){
            console.log(err);
        }
        else{
           
            console.log({data:data},data);
            res.status(200).json({data:data});
        }
        });
    
});
module.exports=router;