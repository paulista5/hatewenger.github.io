var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlEncoderParser = bodyParser.urlencoded({extended:false});
app.set('view engine', 'ejs');
var users = 0;
var highScore = 0;

app.use(express.static('public'));
app.get('/', function(req, res){
  res.render('index', {users: users, highScore: highScore});
  users++;
});
app.post('/', urlEncoderParser, function(req, res){
  var score = req.body.userscore;
  if(highScore < score){
    highScore = score;
  }
  res.json({users: users, highScore: highScore});
});

app.listen(process.env.PORT||3000);
