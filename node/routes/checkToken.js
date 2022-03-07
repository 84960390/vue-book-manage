const express=require('express');
const checkToken=express.Router();
checkToken.get('/checktoken',(req,res)=>{
    try{
      if(req.user){
        return  res.status(200).send({data:{user:req.user.user}})
      }
      throw 'err'
    }catch{
      res.status(401).send({msg:'用户验证失败'});
    }
   
})
module.exports=checkToken;