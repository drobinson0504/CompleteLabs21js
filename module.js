
var myModule = ["red", "green", "blue", "yellow"];





function random() {
	var randomWord = myModule[Math.floor(Math.random() * myModule.length)];
	console.log("RANDOM WORD:", randomWord);
	return randomWord;
	
}


module.exports.random = random;

