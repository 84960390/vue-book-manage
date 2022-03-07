// 链接sql数据库
const mysql=require('mysql');
const booksystem=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'admin',
    database:'books_manage_system'
})
module.exports=booksystem;