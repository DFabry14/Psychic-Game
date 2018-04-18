var winsSpan = document.getElementById("wins");
var wins = 0;
var lossesSpan = document.getElementById("losses");
var losses = 0;
var leftSpan = document.getElementById("left");
var left = 9;
var guessesSpan = document.getElementById("guesses");
var guesses = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomIndex = Math.floor(Math.random() * letters.length);
console.log("this is the random index " + randomIndex)
var computerChoice = letters[randomIndex]
console.log("this is the computer choice " + computerChoice)

function reset () {
    left = 9;
    guesses = [];
    randomIndex = Math.floor(Math.random() * letters.length);
    computerChoice = letters[randomIndex];
    console.log("this is the computer choice " + computerChoice);
}

document.onkeyup = function (event) {
    var playerGuess = event.key;

    var playerLetterArrayIndex = letters.indexOf(playerGuess);

    var playerGuessArrayIndex = guesses.indexOf(playerGuess);
    console.log("this is the player letter array index" + playerLetterArrayIndex);

    if (playerLetterArrayIndex > -1 && playerGuessArrayIndex === -1) {
        guesses.push(playerGuess);
        if (playerGuess === computerChoice) {
            console.log("you win")
            wins++;
            reset ();
        } else {
            left--;
            if (left === 0) {
                losses++;
                reset ();
            }
        }
    }

    guessesSpan.textContent = guesses;
    winsSpan.textContent = wins;
    lossesSpan.textContent = losses;
    leftSpan.textContent = left;
}

// make losses and wins add up by one 
// resetting the game after 9 guesses
// 