//数据库类
export class _mysql {
   constructor(getdata) {
      this.mysql = require('mysql');
      this.getData = getdata;
      this.connection = this.mysql.createConnection({
         host: 'localhost',
         user: 'root',  //用户名
         password: '',   //密码
         database: 'Trunks',
         port: '3306'     //端口号
      });
   }
   connect() {
      this.connection.connect(function (err) {
         let time = new Date()
         if (err) {

            console.log('Err:' + err + '---' + time);
            return;
         }

         console.log('连接succeed   ----' + time);
      });
   }
   //登录
   getUserInfo(callback) {
      this.connection.query('select * from user_info where user_name = ? and pass_word = ?', [this.getData.userName, this.getData.passWord], (err, rs, fields) => {
         if (err) {
            return callback(err, rs, fields)
         } else {
            return callback(err, blog, fields)
         }
      })
   }
   //注册
   addUser(callback) {
      this.connection.query('insert into user_info (user_name,name,pass_word,email) value(?,?,?,?)', [this.getData.userName, this.getData.name,this.getData.passWord,this.getData.email], (err, rs, fields) => {
         if (err) {
            return callback(err, rs, fields)
         } else {
            return callback(err, blog, fields)
         }
      })
   }
   //新增博客
   addBlog(callback){
      
   }
   //关闭数据库
   close() {
      this.connection.end(function (err) {
         if (err) {
            console.log('---:' + err);
            return;
         }
         console.log('关闭succeed');
      });
   }

}