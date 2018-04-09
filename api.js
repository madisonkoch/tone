const express = require('express')
const request = require('request')
const path = require('path')
const PORT = process.env.PORT || 8080
const app = express();
require('dotenv').config()
  

/**    
 * Builds the config file to be used
 */
app.get('/config.js', function(req, res){
  res.write("var SLACK_URL='"+process.env.SLACK_URL+"'"  + '\n');
  res.write("var SLACK_TOKEN='"+process.env.SLACK_TOKEN+"'"  + '\n');
  res.write("var SLACK_CHANNEL='"+process.env.SLACK_CHANNEL+"'"  + '\n');
  res.write("var SLACK_TEST='"+process.env.SLACK_TEST+"'"  + '\n');
  res.end();
});

/**    
 * send the enviromendal data to the right page when offline
 */
app.get('/slackContent', function (req, res){
   res.send(process.env.SLACK_TOKEN)
  })


/**     
 *  Main route loads the index.html page and sets the default
 * @path /
 */
app
  .use(express.static(path.join(__dirname)))
  .use("/styles", express.static(__dirname))
  .get('/', (req, res) => res.render('index.html')) 
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


let savedThing;

/**
 * Accepts the redirect URL from slack and sends back the code sent for Oauth then lodas the variables.
 */
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
