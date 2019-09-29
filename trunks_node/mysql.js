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
          if (err) {
             console.log('---:' + err);
             return;
          }
          console.log('连接succeed');
       });
    }
    //知识点上传
    addBlog(callback) {
       this.connection.query('insert into blog_data (user_id,title,article,is_share,sort,sort_id) values (?,?,?,?,?,?)',
          [this.getData.user_id, this.getData.title, this.getData.article, this.getData.is_share, this.getData.sort, this.getData.sort_id],
          (err, rs, fields) => {
             if (err) {
                return callback(err, rs, fields)
             } else {
                this.connection.query('select * from blog_data where id = LAST_INSERT_ID()', (err, blog, fields) => {
                   return callback(err, blog, fields)
                })
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