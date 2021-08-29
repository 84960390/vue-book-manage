const express=require('express');
const studentLogin=express.Router();
const jwt=require('jsonwebtoken');
const booksystem=require('../sql/booksystem');
const secret=require('../common/secret');
// 学生登录
studentLogin.post('/studentlogin',(req,res)=>{
    booksystem.query('select password,id,account from  students where account=?',req.body.account,(err,results)=>{     
        if(results.length!==0){
            if(results[0].password===req.body.password){
                res.send({
                    status:0,
                    msg:'登录成功',
                    data:results[0],
                    token:'Bearer '+jwt.sign({userid:results[0].id,account:results[0].account,user:'student'},
                                    secret,
                                    {expiresIn:'24h'}
    
                        )
                })
                return
            }
        }
        res.status(422).send({
            msg:'账号或密码错误'
        });
        
    });
})
// 管理员登录
studentLogin.post('/adminlogin',(req,res)=>{
    booksystem.query('select password,id,account from  administrator where account=?',req.body.account,(err,results)=>{   
        
        if(results.length!==0){
            if(results[0].password===req.body.password){
                res.send({
                    status:0,
                    msg:'登录成功',
                    data:results[0],
                    token:'Bearer '+jwt.sign({userid:results[0].id,account:results[0].account,user:'admin'},
                                    secret,
                                    {expiresIn:'24h'}
    
                        )
                })
                return
            }
        }
        res.status(422).send({
            msg:'账号或密码错误'
        });
        
    });
})
module.exports=studentLogin;