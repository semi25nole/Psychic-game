
//This section holds the starting data for the game
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 1;
var guesses = 0;
var remaining = 10;


// This section will reset the variable to the original values once the player reaches the maximum amount of guesses allowed for the game
function reWriteStats () {
	document.getElementById("remaining").innerHTML = remaining;
	remaining = 10;
	document.getElementById("guesses").innerHTML = guesses;
	guesses = 0;
}

//This function recognizes the keystroke the user will make in order to guess a letter
document.onkeypress = function(event) {

	var computerGuess = letters[Math.floor(Math.random() * letters.length)];
	var userGuess = event.key;

// Basic Rules of the Game! 
if ((userGuess == "a")||(userGuess == "b")||(userGuess == "c")||(userGuess == "d")||(userGuess == "e")||(userGuess == "f")||(userGuess == "g")||(userGuess == "h")||
(userGuess == "i")||(userGuess == "j")||(userGuess == "k")||(userGuess == "l")||(userGuess == "m")||(userGuess == "n")||(userGuess == "o")||(userGuess == "p")|| 
(userGuess == "q")||(userGuess == "r")||(userGuess == "s")||(userGuess == "t")||(userGuess == "u")||(userGuess == "v")||(userGuess == "w")||(userGuess == "x")||
(userGuess == "y")||(userGuess == "z")) {
if (userGuess === computerGuess) {
	document.getElementById("wins").innerHTML = wins;
	wins++;
}

// If remaining guesses reaches 0; this function will run
else if (remaining == 0) {
	alert("You lose");
	document.getElementById("losses").innerHTML = losses;
	reWriteStats();
	losses++;

}

// Once a player begins pressing a key; this will run
if (userGuess) {
	document.getElementById("remaining").innerHTML = remaining;
	remaining--;
	document.getElementById("guesses").innerHTML = guesses;
	guesses++;

}
}
};




