$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  renderGuessHistory();
  $('#add-guesses-button').on('click', handleSubmitClick);
  $('#restart-button').on('click', restartButton);
  generateNumber();
}

function handleSubmitClick() {
  const newGuessRow = {
    adam: $('#adam-input').val(),
    duncan: $('#duncan-input').val(),
    kayla: $('#kayla-input').val(),
    selam: $('#selam-input').val()
  }
  $.ajax({
    method: 'POST',
    url: '/guessingGame',
    data: newGuessRow
  }).then((response) => {
    console.log('YAY it worked');
    renderGuessHistory();
    clearInputs();
  }).catch((error) => {
    console.log('it didnt work');
  })
}

function renderGuessHistory() {
  $.ajax({
    method: 'GET',
    url: '/guessingGame'
  }).then((response) => {
    console.log('response', response);
    // CHANGE LATER WHEN TABLE IS DONE
    $('#guess-list').empty();
    
    for (let guess of response) {
      //testAdamGuesses();
      $('#guess-list').append(`
        <li>${guess.adam} ${guess.duncan} ${guess.kayla} ${guess.selam}</li>
      `)
      console.log(guess.adamResult);
    }
  }).catch((error) => {
    console.log('error', error);
  });
}


function generateNumber() {
  $.ajax({
    method: 'GET',
    url: '/randomNumber'
  }).then((response) => {
    console.log('response', response);
    // CHANGE LATER WHEN TABLE IS DONE
  }).catch((error) => {
    console.log('error', error);
  });
}

function restartButton()  {
  $.ajax({
    method: 'GET',
    url: '/restartButton'
  }).then((response) => {
  generateNumber();
  renderGuessHistory();
  console.log('Restarted the game');
  }).catch((error) => {
  console.log('error', error);
});
}

function clearInputs() {
  $('#adam-input').val('');
  $('#duncan-input').val('');
  $('#kayla-input').val('');
  $('#selam-input').val('');
}