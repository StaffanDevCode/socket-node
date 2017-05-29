const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const basePath = '/api/v1/';

app.get(basePath, function(req, res){
  res.send({'response':'ok'});
});

app.use(express.static('public'));

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'from server' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  socket.on('name', function (data) {
    console.log(data);
  });
});

app.use(function (err, req, res, next) {
  res.status(500).send('Something broke!')
});

server.listen(3030, function () {
  console.log('app ready on localhost:3030');
});