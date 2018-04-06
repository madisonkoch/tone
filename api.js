const express = require('express')
const request = require('request')
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


//   app.get('/auth/redirect',function (req, res){
//     const CODE = req.query.code; //window.location.href
//     const _SLACK_USERID = '338977510529.340356602870';
//     const _SLACK_SECRET = '03cb74d67b4d3b18028962b6902157da';

//     res.send(CODE)
// })

app.get('/auth/redirect', (req, res) =>{
  var options = {
      uri: 'https://slack.com/api/oauth.access?code='
          +req.query.code+
          '&client_id=338977510529.340356602870'+
          '&client_secret=03cb74d67b4d3b18028962b6902157da'+
          '&redirect_uri=index.html',
      method: 'GET'
  }
  request(options, (error, response, body) => {
      var JSONresponse = JSON.parse(body)
      if (!JSONresponse.ok){
          console.log(JSONresponse)
          res.send("Error encountered: \n"+JSON.stringify(JSONresponse)).status(200).end()
      }else{
          console.log(JSONresponse)
          res.render('index.html');
      }
  })
})