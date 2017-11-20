//Variable
var config = require('./config');
var app = config.app;
var server = config.server;
var port = config.port;
var io = require('socket.io')(server);
const express = require('express');
var path = require('path');

//App use
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/public/css')));
app.use(express.static(path.join(__dirname, '/public/js')));

//Server
server.listen(port, function(){
  console.log('Listening on ' + port);
});

//Routes
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

//Socket
io.on('connection', function(socket){
  socket.on('new messages', function(messages){
    io.emit('new messages io', {
      username: messages.username, message: messages.messages
    });
  });

socket.on('new user', function(user){
    socket.username = user;
    io.emit('show users', {username: user});
  });
});
