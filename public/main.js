const connect = function () {
  const getSocket = require('socket.io-client')('http://localhost:3030');

  const initConnection = function(){
    const socket = getSocket;
    socket.on('news', function (data) {
      console.log(data);
      socket.emit('my other event', {hello: 'from client'});
    });
  };
  return {
    getSocket: getSocket,
    initConnection: initConnection
  }
};

module.exports = connect;