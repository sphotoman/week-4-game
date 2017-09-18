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


console.log("crystal 1 = " + crystal1Value);
console.log("crystal 2 = " + crystal2Value);
console.log("crystal 3 = " + crystal3Value);
console.log("crystal 4 = " + crystal4Value);
console.log("Random #  = " + randomNum);

// Functions & Methods
$("#crystal1").click(function(){
    totalScore= totalScore + crystal1Value;
    console.log("totalScore =" + totalScore);
});

$("#crystal2").click(function(){
    totalScore= totalScore + crystal2Value;
    console.log("totalScore =" + totalScore);
});

$("#crystal3").click(function(){
    totalScore= totalScore + crystal3Value;
    console.log("totalScore =" + totalScore);
});

$("#crystal4").click(function(){
    totalScore= totalScore + crystal4Value;
    console.log("totalScore =" + totalScore);
});


// add value of crystal seletions to totalScore and Display on page.
$("#crystal1").click(function(){
    $("#guessesTotal").text(totalScore);
    // winOrLose();
});

$("#crystal2").click(function(){
    $("#guessesTotal").text(totalScore);
    // winOrLose();
});

$("#crystal3").click(function(){
    $("#guessesTotal").text(totalScore);
    // winOrLose();
});

$("#crystal4").click(function(){
    $("#guessesTotal").text(totalScore);
    // winOrLose(totalScore);

});

// Display Random Number
$(document).ready(function(){
		$("#randomNumber").text("Match this number: " + randomNum);
		$("#wins").text("wins " + wins);
		$("#loses").text("loses " + loses);

});


function winOrLose() {
	if (totalScore > randomNum) {
	console.log("you loser");
	}
		else if (totalScore === randomNum) {
	console.log("your a winner");
	}	else ( totalScore < randomNum ) {
	console.log("you better keep trying");
	}
};


/* Test for Win or Loss;
If totalScore < randomNum - keep playing
if totalScore = randomNum - you are a winner, reset game
if totalScore > randomNum - you lose., reset game
*/

 