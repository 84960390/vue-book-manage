const express=require('express');
const booksystem = require('../sql/booksystem');
const bookRenew=express.Router();
bookRenew.get('/bookrenew',(req,res)=>{
    booksystem.query('update books set returndate=? where id=?',[req.query.newdate,req.query.bookid],(err,results)=>{
        if(results.affectedRows==1){
          return  res.send({
                status:0,
                msg:'续借成功'

            })
        }
        res.status(402).send({
            msg:'续借失败'
        })
    })
})
module.exports=bookRenew;