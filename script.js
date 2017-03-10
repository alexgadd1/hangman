window.onload = function () {

var greeting = prompt("Welcome to HANGMAN!");
console.log("Welcome to HANGMAN!")

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
 'p', 'q', 'r', 'x', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var word = "javascript";


$("#alphabet").on("click", function($event) {
	
	var userGuess = $($event.target).attr('id');
	alert("The character you guessed was: " + userGuess);

	var correct = word.includes(userGuess); 
	alert("Your guess was " + correct);
});

}
