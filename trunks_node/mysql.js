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
      this.connection.query('insert into user_info (user_name,name,pass_word,email) value(?,?,?,?)', [this.getData.userName, this.getData.name, this.getData.passWord, this.getData.email], (err, rs, fields) => {
         if (err) {
            return callback(err, rs, fields)
         } else {
            return callback(err, blog, fields)
         }
      })
   }
   //新增博客
   addBlog(callback) {
      this.connection.query('insert into blog_info (title,article,sign,is_original) value(?,?,?,?)', [this.getData.title, this.getData.article, this.getData.sign, this.getData.isOriginal], (err, rs, fields) => {
         if (err) {
            return callback(err, rs, fields)
         } else {
            return callback(err, blog, fields)
         }
      })
   }
   //获取博客列表
   getBlog(callback) {
      this.connection.query('select * from blog_info', [], (err, rs, fields) => {
         if (err) {
            return callback(err, rs, fields)
         } else {
            return callback(err, blog, fields)
         }
      })
   }
   //删除博客
   deleteBlog(callback) {
      this.connection.query('delete from blog_info where id = ?', [this.getData.id], (err, rs, fields) => {
         if (err) {
            return callback(err, rs, fields)
         } else {
            return callback(err, blog, fields)
         }
      })
   }
   //修改博客
   updateBlog(callback) {
      this.connection.query('update blog_info set title = ?,article = ?,sign = ?,is_original = ? where id = ?',
         [this.getData.title, this.getData.article, this.getData.sign, this.getData.isOriginal, this.getData.id], (err, rs, fields) => {
            if (err) {
               return callback(err, rs, fields)
            } else {
               return callback(err, blog, fields)
            }
         })
   }
   //浏览量
   addLookCount(callback){
      this.connection.query('update blog_info set look_count = look_count+1 where id = ?',
         [this.getData.lookCount,this.getData.id], (err, rs, fields) => {
            if (err) {
               return callback(err, rs, fields)
            } else {
               return callback(err, blog, fields)
            }
         })
   }
   //获取标签列表
   getSign(callback) {
      this.connection.query('select * from sign_info', [], (err, rs, fields) => {
         if (err) {
            return callback(err, rs, fields)
         } else {
            return callback(err, blog, fields)
         }
      })
   }
   //添加标签
   addSign(callback){
      this.connection.query('insert into sign_info (sign) value (?)', [this.getData.sign], (err, rs, fields) => {
         if (err) {
            return callback(err, rs, fields)
         } else {
            return callback(err, blog, fields)
         }
      })
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