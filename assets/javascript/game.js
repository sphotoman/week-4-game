
// Display Random Number
$(document).ready(function(){
		
// Global Variables
var wins=0;
var loses=0;
var crystalMin = 1;
var crystalMax = 12;
var randomMin = 19;
var randomMax = 120;

var yourCrystalPicked="";
var totalScore=0;
var crystal1Value = Math.floor(Math.random()*(crystalMax-crystalMin+1)+crystalMin);
var crystal2Value = Math.floor(Math.random()*(crystalMax-crystalMin+1)+crystalMin);
var crystal3Value = Math.floor(Math.random()*(crystalMax-crystalMin+1)+crystalMin);
var crystal4Value = Math.floor(Math.random()*(crystalMax-crystalMin+1)+crystalMin);

var randomNum = Math.floor(Math.random()*(randomMax-randomMin+1)+randomMin);

$("#randomNumber").text("Match this number: " + randomNum);
		$("#wins").text(wins);
		$("#loses").text(loses);

console.log("crystal 1 = " + crystal1Value);
console.log("crystal 2 = " + crystal2Value);
console.log("crystal 3 = " + crystal3Value);
console.log("crystal 4 = " + crystal4Value);
console.log("Random #  = " + randomNum);

// Functions & Methods
$(".crystal").click(function(){
	var elemId = $(this).attr('id');

	if (elemId === 'crystal1') {
		totalScore= totalScore + crystal1Value;
		$("#guessesTotal").text(totalScore);
    	
	}

	if (elemId === 'crystal2') {
		totalScore= totalScore + crystal2Value;
		$("#guessesTotal").text(totalScore);
    	
	}
	if (elemId === 'crystal3') {
		totalScore= totalScore + crystal3Value;
		$("#guessesTotal").text(totalScore);
    	
	}
	if (elemId === 'crystal4') {
		totalScore= totalScore + crystal4Value;
		$("#guessesTotal").text(totalScore);
    	
	}

   // repeat 3x with crystals 2-4
    console.log($(this).attr('id'));
    console.log("totalScore =" + totalScore);


    winOrLose();
});



function winOrLose () {
	if (totalScore > randomNum) {
			loses++;
			$("#loses").text(loses);
			console.log("you loser");
			reset();
	}	else if (totalScore === randomNum) {
			wins++;
			reset();
			$("#wins").text(wins);
			console.log("your a winner");
	}	else if (totalScore < randomNum) {
			console.log("you better keep trying");
	}
};

function reset () {
	 
	 crystal1Value = Math.floor(Math.random()*(crystalMax-crystalMin+1)+crystalMin);
	 crystal2Value = Math.floor(Math.random()*(crystalMax-crystalMin+1)+crystalMin);
	 crystal3Value = Math.floor(Math.random()*(crystalMax-crystalMin+1)+crystalMin);
	 crystal4Value = Math.floor(Math.random()*(crystalMax-crystalMin+1)+crystalMin);

	 randomNum = Math.floor(Math.random()*(randomMax-randomMin+1)+randomMin);
	 $("#randomNumber").text("Match this number: " + randomNum);
	 totalScore=0;
	 $("#guessesTotal").text(totalScore);

	 	console.log("crystal 1 = " + crystal1Value);
		console.log("crystal 2 = " + crystal2Value);
		console.log("crystal 3 = " + crystal3Value);
		console.log("crystal 4 = " + crystal4Value);
		console.log("Random #  = " + randomNum);
		}




 });