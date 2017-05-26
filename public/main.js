const connect = function () {
  var socket = io('http://localhost:3030');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', {my: 'data'});
  });
};

module.exports = connect;