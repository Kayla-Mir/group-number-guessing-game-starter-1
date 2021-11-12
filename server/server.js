const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;
// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

let numberGuesses = []; 

// GET & POST Routes go here
app.get('/guessingGame', (req, res) => {
  console.log('in GET /guessingGame');
  res.send(numberGuesses);
  res.send(testAdamGuesses());
});

app.post('/guessingGame', (req, res) => {
  console.log('in POST /guessingGame');
  console.log('req.body', req.body);
  numberGuesses.push(req.body);
  res.sendStatus(201);
});


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
});

randomNumber = [];

function randomNumberGenerator() {
  randomNumber.push(`${Math.floor(Math.random() * (1 + 25 - 1) + 1)}`);
}

app.get('/randomNumber', (req, res) => {
  console.log('in GET /randomNumber');
  res.send(randomNumberGenerator());
});

function restartButtonHandler() {
  numberGuesses = [];
}

app.get('/restartButton', (req, res) => {
  console.log('in GET /restartButton');
  res.send(restartButtonHandler());
});

function testAdamGuesses() {
    if (numberGuesses.adam == randomNumber) {
      console.log('WE HAVE A WINNER EVERYONE');
    } else if (numberGuesses.adam < randomNumber) {
      numberGuesses.adamResult = 'it was too low!';
    } else if (numberGuesses.adam > randomNumber) {
      numberGuesses.adamResult = 'it was too high!';
    } else {
      console.log('this didnt work');
    }
  }

