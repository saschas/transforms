var express = require('express');
var fs = require('fs');
		path = require('path');
var app = express();
		http = require('http').Server(app);
var io = require('socket.io')(http);



app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});



//Start Connection

io.on('connection', function(socket){
  console.log('a user connected');

  //chat event
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);

    io.emit('chat message', msg);
  });


  //disconnect event
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });


});




// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });