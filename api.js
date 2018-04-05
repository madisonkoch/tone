const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8080
const app = express();

app.post('/hello', function (req, res) {
  res.send('POST request to the homepage');
});

app
   .use(express.static(path.join(__dirname)))
   .use("/styles", express.static(__dirname))
  .get('/', (req, res) => res.render('index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
// .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('index.html'))
//   .l isten(PORT, () => console.log(`Listening on ${ PORT }`))
 

  // Loop otherwise..
  // if (userName !== 'slackbot') {
  //   return res.status(200).json(botPayload);
  // } else {
  //   return res.status(200).end();
  // }
// });
 
// app.listen(PORT, function () {
//   console.log('Listening on port ' + port);
// });
