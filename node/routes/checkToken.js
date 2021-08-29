const express=require('express');
const checkToken=express.Router();
checkToken.get('/checktoken',(req,res)=>{
    if(req.user){
      return  res.status(200).send({data:{user:req.user.user}})
    }
    res.status(401).send({msg:'服务器错误'});
})
module.exports=checkToken;