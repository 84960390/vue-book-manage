const express=require('express');
const booksystem = require('../sql/booksystem');
const studentLend=express.Router();
studentLend.get('/studentlend',(req,res)=>{
     console.log(req.user);
if(req.user.user=='student'){
     booksystem.query('select lendbook from students where id=?',[req.user.userid],(err,results)=>{
          if(results.length==0){
               res.status(401).send({msg:'登录已过期'})
          }else{
               // 将用户借过的书籍id转换成数组
          let allLendbooks=[];
          if(results[0].lendbook!==undefined&&results[0].lendbook!==null){
           allLendbooks=results[0].lendbook.split(',');
           console.log(allLendbooks)
                    // 数组去重
          let books=new Set(allLendbooks);
          
          allLendbooks=[...books];
          }
         booksystem.query('select * from books where id in (?) and lenduserid=?',[allLendbooks,req.user.userid],(err,results1)=>{
              if(results1){
               results1.forEach(item => {
                    item.picname='http://127.0.0.1:8000/book/picimg/'+item.picname;               
            });

              }
             
               res.send({
                   status:0,
                   mag:'查询成功',
                   data:results1
               })
           
          })
          }
     })
}

})
module.exports=studentLend;
