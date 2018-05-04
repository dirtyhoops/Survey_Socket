var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const server = app.listen(8000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
    socket.on( "submittedForm", function (data){
        console.log('just a check if its working ---- someone sent a form');
        var randomnum = Math.floor(Math.random()*1000+1);
        socket.emit('serverResponse', {response: data}, randomnum);
      });  
})

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));


app.get('/', function(req, res) {
    res.render('index')
})






