const express=require('express');
const booksystem = require('../sql/booksystem');
const bookReturn=express.Router();
bookReturn.get('/bookreturn',(req,res)=>{
    booksystem.query('select * from books where bookid=?',[req.query.bookid],(err,results)=>{
        if(results.length==0){
           return res.status(401).send({
                msg:'暂无该书，请检查图书编号'
            })
        }else if(results[0].status==0){
          return  res.status(401).send({
                msg:'该书已归还，无需再次归还'
            })
        }else{
            // 判断是否逾期
            let information='还书成功';
            const time=Date.now();
            if(time>results[0].returndate){
                information='还书成功，该书已逾期';
            }
            // 更新图书状态
            const booksInfo={...results[0],lenddate:null,lenduserid:null,returndate:null,status:0}; 
            booksystem.query('update books set ? where bookid=?',[booksInfo,req.query.bookid],(err,results1)=>{
                booksInfo.picname='http://127.0.0.1:8000/book/picimg/'+booksInfo.picname;    
                console.log(results1)  
                if(results1){
                  return  res.status(200).send({
                        msg:information,
                        data:booksInfo
                    })
                }
                res.status(401).send({
                    msg:'还书失败，未知错误',
                    data:booksInfo
                })
            })

        }
      
    })
})
module.exports=bookReturn;