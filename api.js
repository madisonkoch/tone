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


//   app.get('/auth/redirect', (req, res) =>{
//    res.send('user ' + req.param() );
// })

/* WAIT FOR NEW APP INSTALLATION REQUESTS FROM SLACK */
app.get('/auth/redirect', function(req, res) {
  // Tease out accessCode from the Slack request, if it exists 
  var url = req.url;
  // var codePos = url.indexOf("code="); //index where code= starts in url
  // var codeStartPos = codePos + 5; //Start of accessCode (+5 because code= is 5 characters)
  // var endingPos = url.indexOf("&"); //End of accessCode, where another parameter starts
  // var accessCode = url.substring(codeStartPos, endingPos).toString();   //Extract code from url
  req.send('acesses code ' + url)

  // Verify user accepted Slack's auth request by looking for access_code existence
 

  });