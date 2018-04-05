const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8080
const app = express();

app.post('/hello', function (req, res) {
  
  var userName = 'test';
  var botPayload = {
    text : 'Hello, ' + req + '!'
  };
  res.status(200).json(botPayload);
  // avoid infinite loop
  // if (userName !== 'slackbot') {
  
  // } else {
  //   return res.status(200).end();
  // }
});


app
.use(express.static(path.join(__dirname)))
.get('/auth', (req, res) => res.render('index.html'))

app
   .use(express.static(path.join(__dirname)))
   .use("/styles", express.static(__dirname))
  .get('/', (req, res) => res.render('index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


 
