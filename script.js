window.onload = function () {

var greeting = prompt("Welcome to HANGMAN!");
console.log("Welcome to HANGMAN!")

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
 'p', 'q', 'r', 'x', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var words = ['javascript', 'rails', 'variable', 'array', 'function', 'jquery',
 'github', 'terminal', 'homework', 'project'];

var randNum = Math.floor(Math.random() * words.length);

$("#alphabet").on("click", function() {
alert("hello");
});

}
