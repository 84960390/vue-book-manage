const express=require('express');
const booksystem = require('../sql/booksystem');
const allBooksInfo=express.Router();
allBooksInfo.get('/allbooksinfo',(req,res)=>{
    booksystem.query('select * from books',(err,results)=>{
        if(results.length>0){
            results.forEach(item => {
                item.picname='http://127.0.0.1:8000/book/picimg/'+item.picname;
            });
            res.status(200).send({data:results})
        }else{
            res.status(401).send({msg:'未知错误'})
        }
    })
   
})
module.exports=allBooksInfo;