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


//用户名列表，用于提示用户该用户名是否存在
app.post('/api/user/user_name_list', (req, res, next) => {
   let mysql = new _mysql();

   mysql.getNameList((err, list, fields) => {
      if (err) {
         res.json({ res: 1, message: '请求失败' })
         next(err);
      } else {
         // let get_data = [];
         // for (let i = 0; i < list.length; i++) {
         //    get_data.push(list[i].name)
         // }
         console.log('用户名列表请求成功')
         res.status(200);
         res.json({ res: 0, message: '请求处理成功', data: list })
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