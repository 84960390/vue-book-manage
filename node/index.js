const express=require('express');
const app=express();
// 导入模块

// cors模块
const cors=require('cors');
const path=require('path');
// 获取post请求中的参数
const bodyParser=require('body-parser');
const expressJWT=require('express-jwt');


// 路由模块
const login=require('./routes/login');
const studentInfo = require('./routes/studentinfo');
const studentLend=require('./routes/studentLend');
const bookSearch=require('./routes/bookSearch');
const studentChangePassword=require('./routes/studentChangePassword');
const bookRenew=require('./routes/bookRenew');
const bookReturn=require('./routes/bookReturn');
const getStudentInfo=require('./routes/getStudentInfo');
const lendBooks=require('./routes/lendBooks');
const allBooksInfo=require('./routes/allBooksInfo');
const deleteBook=require('./routes/deleteBook');
const addStudent=require('./routes/addStudent');
const deleteStudent = require('./routes/deleteStudent');
const adminChangePassword = require('./routes/adminChangePassword');
const checkToken = require('./routes/checkToken');
const addBooks = require('./routes/addBooks');
// 自定义变量

// token秘钥
const secretkey='bookmanage';

app.use(bodyParser());

app.use(express.urlencoded({extended:false}))
app.use(cors());
app.use(expressJWT({secret:secretkey,algorithms:['HS256']}).unless({path:[/^\/login/,/^\/book\/picimg/]}))

app.use(express.static('bookpic'));

// token错误处理中间件
app.use((err,req,res,next)=>{
    if(err.name=='UnauthorizedError'){
        res.send({
            status:401,
            msg:'token已过期'
        })
    }else{
        res.send({
            status:500,
            msg:'未知错误',
        })
    }
})

app.use('/login',login);
app.use(checkToken);
app.use('/student',studentInfo);
app.use('/student',studentLend);
app.use(bookSearch);
app.use('/student',studentChangePassword);
app.use('/books',[bookRenew,bookReturn]);
app.use('/admin',[getStudentInfo,lendBooks,allBooksInfo,deleteBook,addStudent,deleteStudent,adminChangePassword,addBooks]);
// 响应图片
app.get('/book/picimg/:picname',(req,res)=>{
   res.sendFile(path.join(__dirname,'/bookpic/'+req.params.picname))
})
app.listen(8000,()=>{
    console.log('服务器开启成功');
})