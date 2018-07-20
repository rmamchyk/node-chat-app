var socket = io();

socket.on('connect', function(){
  console.log('Connected to server');
});

socket.on('disconnect', function(){
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message){
  console.log(`Got a message from '${message.from}': ${message.text}\n(${new Date(message.createdAt).toLocaleString()})`);
});
