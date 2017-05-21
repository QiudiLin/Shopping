var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var multer = require('multer');
var session = require('express-session');

global.dbHelper = require( './common/dbHelper' );
global.db = mongoose.connect("mongodb://127.0.0.1:27017/test1");

app.use(session({
    secret:'secret',
    cookie:{
        maxAge:1000*60*30
    }
}));

// INSTALL Nunjucks
var nunjucks = require('nunjucks');

// Create nunjucks enviorment
var nunjucksEnv = nunjucks.configure('./views', { express: app });

// DEMO: add simple filter method for logging in the views
nunjucksEnv.addFilter('log', console.log);

// Tell express which engine to use
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
//表单元素格式化
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));//缺这句话报500错误
app.use(multer());

//定义静态路径，dirname当前路径
app.use(express.static(path.join(__dirname, 'public')));

require('./route')(app);

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
