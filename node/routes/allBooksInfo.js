const express=require('express');
const booksystem = require('../sql/booksystem');
const allBooksInfo=express.Router();
const baseURL=require('../baseURL');
allBooksInfo.get('/allbooksinfo',(req,res)=>{
    booksystem.query('select * from books',(err,results)=>{
        try{
            if(results.length>0){
                results.forEach(item => {
                    item.picname=baseURL+'/book/picimg/'+item.picname;
                });
                res.status(200).send({data:results})
            }else{
                throw '查询失败'
            }
        }catch{
                res.status(401).send({msg:'未知错误'})
        }
    })
   
})
module.exports=allBooksInfo;