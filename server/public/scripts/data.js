let numberGuesses = [{
    kayla: 4,
    adam: 15,
    duncan: 24,
    selam: 9
}];
// CLEAR THIS OUT LATER

module.exports = numberGuesses;

let randomNumber = [];

function randomNumberGenerator(min, max) {
    min = 1;
    max = 25;
    randomNumber.push(Math.floor(Math.random() * (1 + max - min) + min));
}