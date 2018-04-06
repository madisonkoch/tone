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
   .use("/styles", express.static(__dirname))
  .get('/', (req, res) => res.render('index.html')) 
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  app.get('/users/', function (req, res) {
    

    res.sendFile(path.join(__dirname + '/index.html'));

  })


  function logErrors (err, req, res, next) {
    console.error(err.stack)
    next(err)
  }


  app.get('/auth/redirect',function (req, res){
    const CODE = req.query.code; //window.location.href
    const _SLACK_USERID = '';
    const _SLACK_SECRET = '';

    res.send(CODE)
})

