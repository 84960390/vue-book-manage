const express=require('express');
const booksystem = require('../sql/booksystem');
const bookSearch=express.Router();
bookSearch.get('/booksearch',(req,res)=>{

    booksystem.query('select * from books where bookname like ?',[`%${req.query.bookname}%`],(err,result)=>{
        let booknumber=[];
        let searchResult=[];
        
        result.forEach(item => {
            item.picname='http://127.0.0.1:8000/book/picimg/'+item.picname;  
            item.booknumber+='-XX';
            // 计算馆藏数量及剩余可借        
            if(booknumber.indexOf(item.booknumber)==-1){
                booknumber.push(item.booknumber);
                item.sum=1;
                item.status==0? item.remain=1 : item.remain=0;
                searchResult.push(item);
            }else{
                searchResult[booknumber.indexOf(item.booknumber)].sum++;
                if(item.status==0) {searchResult[booknumber.indexOf(item.booknumber)].remain++};

            }
        });
        if(result.length==0){
          return  res.send({
                status:401,
                msg:'暂无该数据',
            })
        }
        res.send({
            status:0,
            msg:'查询成功',
            data:searchResult,
        })
    })
})
bookSearch.get('/booksearchNoMerge',(req,res)=>{

    
    booksystem.query('select * from books where bookname like ?',[`%${req.query.bookname}%`],(err,result)=>{
        result.forEach(item => {
            item.picname='http://127.0.0.1:8000/book/picimg/'+item.picname;  
        });
        if(result.length==0){
          return  res.send({
                status:401,
                msg:'暂无该数据',
            })
        }
        res.send({
            status:0,
            msg:'查询成功',
            data:result,
        })
    })
})
module.exports=bookSearch;