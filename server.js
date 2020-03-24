const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const PORT = 3000;

let users = [];
let connections = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', (socket) => {
  connections.push(socket);
  console.log(connections.length + '  connections');
});

server.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
