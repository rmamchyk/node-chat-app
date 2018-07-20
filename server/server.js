const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(path.join(__dirname, '../public')));

io.on('connection', (socket)=>{
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'Mike',
    text: 'Hi, guys! This is mike. How are you doing?',
    createdAt: new Date().getTime()
  });

  socket.on('createMessage', (newMessage)=>{
    newMessage.createdAt = new Date().getTime();
    console.log('New message received:', newMessage);
    socket.emit('newMessage', newMessage);
  });

  socket.on('disconnect', ()=>{
    console.log('User was disconnected');
  });
});

server.listen(port, ()=>{
  console.log(`Server started on port ${port}`);
});
