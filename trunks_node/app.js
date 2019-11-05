import { _mysql } from "./mysql"
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//设置跨域
app.all('*', function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Accept,Accept-Encoding,Accept-Language,Connection,Content-Length,Content-Type, Cookie,Host,Origin,Referer,User-Agent, Authorization,X-Requested-With");
   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By", ' 3.2.1');
   res.header("Content-Type", "application/json;charset=utf-8");
   res.header("Access-Control-Allow-Credentials", "true")
   next();
});

//用户操作接口

//登录

app.post('/trunks/user/login', (req, res, next) => {
   let getdata = req.body.params
   let mysql = new _mysql(getdata)
   mysql.getUserInfo((err, list, fields) => {
      if (err) {
         res.json({ res: 1, message: '登录失败' })
         next(err);
      } else {
         let date = new Date()
         console.log('登录成功 -----' + date)
         res.status(200);
         res.json({ res: 0, message: '登录成功', data: list })
      }
      mysql.close()
   })
})

//注册

app.post('/trunks/user/register', function (req, res, next) {
   let getdata = req.query.params
   let mysql = new _mysql(getdata)

   mysql.addUser(function (error, data, fields) {
      if (error) {
         res.json({ res: 1, message: '注册失败' })
         next(error);
      } else {
         let date = new Date()
         console.log("log:" + "注册成功-----" + date);
         res.status(200)
         res.json({ res: 0, message: '注册成功', data: data })
      }
      mysql.close()
   })
})

//新增博客

app.post('/trunks/blog/add_blog', function (req, res, next) {
   let getdata = req.query.params
   let mysql = new _mysql(getdata)
   mysql.addBlog(function (error, data, fields) {
      if (error) {
         res.json({ res: 1, message: '新增博客失败' })
         next(error);
      } else {
         let date = new Date()
         console.log("log:" + "新增博客成功-----" + date);
         res.status(200)
         res.json({ res: 0, message: '新增博客成功', data: data })
      }
      mysql.close()
   })

})

//

app.get('/trunks/blog/get_blog_list', function (req, res, next) {
   // let getdata = JSON.parse(req.query.params)
   let mysql = new _mysql(getdata)
   mysql.getBlog(function (error, data, fields) {
      if (error) {
         res.json({ res: 1, message: '获取博客列表失败' })
         next(error);
      } else {
         let date = new Date()
         console.log("log:" + "获取博客列表成功-----" + date);
         res.status(200)
         res.json({ res: 0, message: '获取博客列表成功', data: data })
      }
      mysql.close()
   })

})
//配置服务端口
const server = app.listen(7788, function () {

   const host = server.address().address;

   const port = server.address().port;

   console.log('Example app listening at http://%s:%s', host, port);
})