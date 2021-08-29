const express=require('express');
const booksystem = require('../sql/booksystem');
const getStudentInfo=express();
getStudentInfo.get('/getstudentinfo',(req,res)=>{

    booksystem.query('select * from students where account=?',[req.query.account],(err,results)=>{
        if(results.length!=0){
          const studentInfo={...results[0],password:''};

              return res.status(200).send({
                 data:studentInfo
             })           

        }
        res.status(422).send({
            msg:'没有该用户',
        })
    })

})
module.exports=getStudentInfo;