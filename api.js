const express = require('express')
const request = require('request')
const path = require('path')
const PORT = process.env.PORT || 8080
const app = express();
require('dotenv').config()

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


app.get('/config.js', function(req, res){
  res.write("var SLACK_URL='"+process.env.SLACK_URL+"'"  + '\n');
  res.write("var SLACK_TOKEN='"+process.env.SLACK_TOKEN+"'"  + '\n');
  res.write("var SLACK_CHANNEL='"+process.env.SLACK_CHANNEL+"'"  + '\n');
  res.write("var SLACK_TEST='"+process.env.SLACK_TEST+"'"  + '\n');
  res.end();
});

app.get('/slackContent', function (req, res){ res.send(process.env.SLACK_TOKEN)})



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
let savedThing
app.get('/auth/redirect', (req, res) =>{
  var options = {
      uri: 'https://slack.com/api/oauth.access?code='
          +req.query.code+
          '&client_id=338977510529.340356602870'+
          '&client_secret=03cb74d67b4d3b18028962b6902157da',
      method: 'GET'

  }
  request(options, (error, response, body) => {
      var JSONresponse = JSON.parse(body)
      if (!JSONresponse.ok){
          console.log(JSONresponse)
          res.send("Error encountered: \n"+JSON.stringify(JSONresponse)).status(200).end()
      }else{
          console.log(JSONresponse)
          res.sendFile(__dirname + '/index.html');
          savedThing = JSONresponse;
          res.url= 'TOTALY WORKING';
      }
  })
})


function getRealUserName(UID){
  $.ajax({
    method:'GET',
    url: `https://slack.com/api/users.profile.get?${SLACK_TOKEN}&user=${UID}&pretty=1`,
    sucess: function(data){return data}
  })
}
