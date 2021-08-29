const express=require('express');
const booksystem = require('../sql/booksystem');
const addStudent=express.Router();
addStudent.post('/addstudent',(req,res)=>{
    booksystem.query('insert into students set ?',[req.body.data],(err,results)=>{
        if(results){
          return  res.status(200).send({msg:'添加成功'})
        }
        res.status(401).send({msg:'添加失败,该用户已存在'})
    })
})
module.exports=addStudent;