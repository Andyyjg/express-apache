//入口文件
//模拟静态资源服务器(apache服务器)

//加载express
var express = require('express');
var path = require('path');

//创建app对象
var app = express();

// //处理静态资源的方法
// var fn = express.static(path.join(__dirname,'public'));
// //注册路由
// app.use('/',fn);
app.use('/',express.static(path.join(__dirname,'public')));
//重定向
app.get('/1',function(req,res){
    res.redirect(301,'https://wwww.baidu.com')
});
//读取文件并返回文件
app.get('/2',function(req,res){
    res.sendFile(path.join(__dirname,'public','1.png'),function(err){
        if(err){
            throw err;
        }
        console.log('ok');
    });
    
    //设置状态码
    //res.status(404).end('文件不存在！');
});

//启动服务
app.listen(9000,function(){
    console.log('http:/localhost:9000');
});