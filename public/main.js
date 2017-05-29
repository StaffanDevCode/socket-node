const socket = require('socket.io-client')('http://localhost:3030');
const connect = function () {
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', {my: 'data'});
  });
};

module.exports = connect;