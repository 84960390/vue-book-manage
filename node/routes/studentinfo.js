const express=require('express');
const booksystem = require('../sql/booksystem');
const studentInfo=express.Router();
studentInfo.get('/studentinfo',(req,res)=>{
    // 根据id获取用户信息
    booksystem.query('select * from students where id=? and account=?',[req.user.userid,req.user.account],(err,results)=>{  
        if(results.length===0){
            return res.status(401).send({
                msg:'登录已过期',
            })
        };

        const userinfo={...results[0],password:null,status:null,headurl:null};
        let allLendbooks=[];
         //  用户借阅书籍的总数
         userinfo.allLendNum=allLendbooks.length;
        if(results[0].lendbook){
            // 将用户借过的书籍id转换成数组
             allLendbooks=results[0].lendbook.split(',');
             //  用户借阅书籍的总数
              userinfo.allLendNum=allLendbooks.length;
              // 数组去重
              let books=new Set(allLendbooks);
              allLendbooks=[...books];
        }


        booksystem.query('select count(*) as num from books where id in (?) and lenduserid=?',[allLendbooks,req.user.userid],(err,result1)=>{
            result1? userinfo.needreturn=result1[0].num:userinfo.needreturn=0;
            // console.log(userinfo)
            res.send({
                status:200,
                msg:'用户信息获取成功',
                data:userinfo
            })
        })
       
      
    })
})
studentInfo.get('/getallstudent',(req,res)=>{
     // 获取所有用户信息
     booksystem.query('select * from students',(err,results)=>{  
         const userinfo=results.map(item => {
             return {...item,password:null,status:null,headurl:null}
         });
          return  res.status(200).send({data:userinfo})
       
      
    })   

})
module.exports=studentInfo;