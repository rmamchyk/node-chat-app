var socket = io();

socket.on('connect', function(){
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Roman',
    text: 'Hey. This is Roman.'
  });
});

socket.on('disconnect', function(){
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message){
  console.log(`Got a message from '${message.from}': ${message.text}\n(${new Date(message.createdAt).toLocaleString()})`);
});
