const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send({'response':'ok'});
});

app.use(function (err, req, res, next) {
  res.status(500).send('Something broke!')
});

app.listen(3030, function () {
  console.log('app ready on localhost:3030');
});