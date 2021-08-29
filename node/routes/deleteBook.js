const express=require('express');
const booksystem = require('../sql/booksystem');
const deleteBook=express.Router();
const fs=require('fs')
deleteBook.get('/deletebook',(req,res)=>{
    booksystem.query('delete from books where id=?',[req.query.bookid],(err,results)=>{
        if(results.affectedRows==1){
           
            fs.unlink(`bookpic/${req.query.pic}`,err=>{
                return err? console.log(err): res.status(200).send({msg:'删除成功'}) ;
             })
        }else{
            res.status(401).send({msg:'删除失败'});
        }
            

    })
})
module.exports=deleteBook;