var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
console.log('I launched');
 
var app = express();
var port = process.env.PORT || 8080; 
 
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});


// app.post('/hello', function (req, res, next) {
//   var userName = req.body.user_name;
//   var botPayload = {
//     text : 'Hello ' + userName + ', welcome to the Channel'
//   };
//   // Loop otherwise..
//   if (userName !== 'slackbot') {
//     return res.status(200).json(botPayload);
//   } else {
//     return res.status(200).end();
//   }
// });
 
// app.listen(8080, function () {
//   console.log('Listening on port ' + port);
// });
