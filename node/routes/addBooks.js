const express=require('express');
const addBooks=express.Router();
const multiparty=require('multiparty');
const fs=require('fs');
const path= require('path');
const booksystem = require('../sql/booksystem');
addBooks.post('/addbooks',(req,res)=>{
        let form=new multiparty.Form({uploadDir:path.join(__dirname,'../bookpic')});
        form.parse(req,(err,fileds,files)=>{
            let bookData=JSON.parse(fileds.data);
            // 判断图书编号是否存在
            booksystem.query('select count(*) as num from books where bookid=?',[bookData.bookid],(err,result)=>{
                if(result[0].num==0){
                    bookData.booknumber=bookData.bookid.split('-')[0];
                    // 要保存的文件名
                    bookData.picname=bookData.bookid+'.jpg';
                    // 数据库添加记录
                    booksystem.query('insert into books set ?',[bookData],(err,result1)=>{
                        if(result1){        
                            // 文件重命名                   
                            fs.rename(files.picname[0].path,`bookpic/${bookData.picname}`,(err)=>{
                                return  err ? console.log(err) : res.status(200).send({msg:'添加成功'});                           
                            })
                        }
                    })
                }else{
                  res.status(401).send({msg:'添加失败,图书编号已存在'});
                //   删除传入的文件
                  fs.unlink(files.picname[0].path,err=>{
                     return err? console.log(err):console.log('success');
                  })
                }
            })          
        })
})

module.exports=addBooks;
