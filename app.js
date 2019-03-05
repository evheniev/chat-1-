var express = require('express');
var cors = require('cors')
var app = express();
const bodyParser = require('body-parser');
var htttp = require('http');


app.use(cors())
app.use(express.static('public'));
app.use(bodyParser.json())


var messages = [{
    nickname : "2",
    message : "2"
  }];


app.get('/message', function (req, res) {
  res.send(messages);
});


app.post('/message',function(req, res){
  app.use(bodyParser.json())

  req.body.timestamp = new Date().getTime();
  messages.push(req.body)
  res.status(201).send(req.body)
});



app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});