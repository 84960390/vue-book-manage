const express = require('express');
const studentLogin = express.Router();
const jwt = require('jsonwebtoken');
const booksystem = require('../sql/booksystem');
const secret = require('../common/secret');
// 学生登录
studentLogin.post('/studentlogin', (req, res) => {
    booksystem.query('select password,id,account from  students where account=?', req.body.account, (err, results) => {
        try {
            if (results[0].password === req.body.password) {
               return  res.send({
                    status: 0,
                    msg: '登录成功',
                    data: results[0],
                    token: 'Bearer ' + jwt.sign({ userid: results[0].id, account: results[0].account, user: 'student' },
                        secret,
                        { expiresIn: '24h' }

                    )
                })
            }
            res.status(422).send({
                msg: '账号或密码错误'
            });
        } catch (err) {
            res.status(422).send({
                msg: '账号不存在'
            });
        }


    });
})
// 管理员登录
studentLogin.post('/adminlogin', (req, res) => {
    booksystem.query('select password,id,account from  administrator where account=?', req.body.account, (err, results) => {
        try {
                if (results[0].password === req.body.password) {
                   return  res.send({
                        status: 0,
                        msg: '登录成功',
                        data: results[0],
                        token: 'Bearer ' + jwt.sign({ userid: results[0].id, account: results[0].account, user: 'admin' },
                            secret,
                            { expiresIn: '24h' }

                        )
                    })
                }
                res.status(422).send({
                    msg: '账号或密码错误'
                });
        } catch {
            res.status(422).send({
                msg: '账号不存在'
            });
        }


    });
})
module.exports = studentLogin;