const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
 
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
