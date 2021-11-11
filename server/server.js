const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;
const numberGuessList = require('./public/scripts/data');
// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.get('/guessingGame', (req, res) => {
  console.log('in GET /guessingGame');
  res.send(numberGuessList);
});

app.post('/guessingGame', (req, res) => {
  console.log('in POST /guessingGame');
  console.log('req.body', req.body);
  numberGuessList.push(req.body);
  res.sendStatus(201);
});


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
});
