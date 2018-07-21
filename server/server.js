const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const {isRealString} = require('./utils/validation');
const {Users} = require('./utils/users');

const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
var users = new Users();

app.use(express.static(path.join(__dirname, '../public')));

io.on('connection', (socket)=>{
  console.log('New user connected');

  socket.on('join', (params, callback)=>{
    if(!isRealString(params.name) || !isRealString(params.room)){
      callback('Name and room name are required');
    } else {
      socket.join(params.room);
      // socket.leave('The Office Fans')
      users.removeUser(socket.id); //remove the user if exists in other room.
      users.addUser(socket.id, params.name, params.room);

      io.to(params.room).emit('updateUserList', users.getUserList(params.room));

      // io.emit -> io.to(The Office Fans).emit
      // socket.broadcast.emit -> socket.broadcast.to('The Office Fans').emit
      // socket.emit
      socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app!'));
      socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name} has joined.`));

      callback();
    }
  });

  socket.on('createMessage', (message, callback)=>{
    var user = users.getUser(socket.id);
    if (user && isRealString(message.text)) {
      io.to(user.room).emit('newMessage', generateMessage(user.name, message.text));
    }

    callback();
  });

  socket.on('createLocationMessage', (coords) => {
    var user = users.getUser(socket.id);
    if (user) {
      io.to(user.room).emit('newLocationMessage', generateLocationMessage(user.name, coords.latitude, coords.longitude));
    }
  });



  socket.on('disconnect', ()=>{
    var user = users.removeUser(socket.id);
    if (user){
      io.to(user.room).emit('updateUserList', users.getUserList(user.room));
      io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left.`));
    }
  });
});

server.listen(port, ()=>{
  console.log(`Server started on port ${port}`);
});
