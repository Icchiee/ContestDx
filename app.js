//変更
//install express
var express =require('express');
var app = express();

//to use express.json and urlencoded
var bodyParser = require('body-parser');

//connect file
var info = require('./routes/info.js');

//to use delete and put method
var connect=require('connect');
var methodOverride =require('method-override');
var logger  = require('morgan');

//tell where ejs files are
app.set('views', __dirname+'/views');
app.set('view engine','ejs');


//middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.static(__dirname));


//routing
app.get('/', info.home);//page to fill in blanks
app.post('/show/create', info.create)//use "form" tag
app.get('/show/confirm', info.confirm)//page for confirmation
app.get('/show/make', info.make)//page for 
app.get('/show/download', info.download)//page for download
app.get('/show/QRcode.png',info.show)//page for download


//app.get('/show/qrcode', info.show);//page that shows QRcode


app.listen(3000);
console.log('server starting...');