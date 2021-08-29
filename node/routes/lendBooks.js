const express=require('express');
const booksystem = require('../sql/booksystem');
const lendBooks=express.Router();
lendBooks.get('/lendbooks',(req,res)=>{
    // 查找图书
    booksystem.query('select * from books where bookid=?',[req.query.bookid],(err,result)=>{
        if(result.length==0)  return res.status(401).send({msg:'暂无该书籍，请检图书编号'})
        // 判断该书是否可借
        if(result[0].status==0){
            // 修改图书信息
            let booksInfo={...result[0],lenddate:Date.now(),returndate:Date.now()+1000*60*60*24*30,lenduserid:req.query.userid,status:1}
            booksystem.query('update books set ? where bookid=?',[booksInfo,req.query.bookid],(err,result1)=>{
                // 判断是否借阅成功
                    if(result1.affectedRows==1){      
                        // 借阅成功,更新用户借阅历史信息                 
                        booksystem.query('select lendbook from students where id=?',[req.query.userid],(err,result2)=>{
                            let newLendBook='';
                            if(result2[0].lendbook==null){
                                newLendBook=booksInfo.id;
                            }else{
                                newLendBook=result2[0].lendbook+','+booksInfo.id;
                            }
                            
                            booksystem.query('update students set lendbook=? where id=?',[newLendBook,req.query.userid],(err,result3)=>{
                                booksInfo.picname='http://127.0.0.1:8000/book/picimg/'+booksInfo.picname;
                                if(result3.affectedRows==1) return res.status(200).send({msg:'借阅成功',data:booksInfo});
                            })
                        })
                    }else{
                        return res.status(401).send({msg:'借阅失败,未知错误'});
                    }
            })
        }else{
            res.status(401).send({msg:'该书还未归还,请归还后再试'})
        }
    })
})
module.exports=lendBooks;