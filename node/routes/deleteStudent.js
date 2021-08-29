const express=require('express');
const booksystem = require('../sql/booksystem');
const deleteStudent=express.Router();
deleteStudent.get('/deletestudent',(req,res)=>{
    booksystem.query('delete from students where id=?',[req.query.userid],(err,result)=>{
        const bookClear={lenddate:null,lenduserid:null,returndate:null,status:0}; 
        booksystem.query('update books set ? where lenduserid=?',[bookClear,req.query.userid],(err,results)=>{       
                return result.affectedRows==1 ? res.status(200).send({msg:'删除成功'}) : res.status(401).send({msg:'删除失败'});
        })
       
       
     
    
    })
})
module.exports=deleteStudent;