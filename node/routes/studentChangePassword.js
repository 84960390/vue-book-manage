const express=require('express');
const booksystem = require('../sql/booksystem');
const studentChangePassword=express.Router();
studentChangePassword.post('/changepassword',(req,res)=>{
    booksystem.query('select password from students where id=?',[req.user.userid],(err,results)=>{
        if(results.length==0){
            res.status(401).send({msg:'登录已过期'})
        }else{
            if(results[0].password==req.body.oldPassword){
                booksystem.query('update students set password=? where id=?',[req.body.password,req.user.userid],(err,result)=>{
                  if(result.affectedRows){
                    return  res.send({
                        status:200,
                        msg:'密码修改成功,请重新登录',
                    })
                  }
                  res.send({
                    status:401,
                    msg:'修改失败'
                })
                })
                
            }else{
                res.send({
                    status:401,
                    msg:'旧密码错误',
                });
            }
        }
      
    })
   
})
module.exports=studentChangePassword;