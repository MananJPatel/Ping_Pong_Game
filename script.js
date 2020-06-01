var rod1 = document.getElementsByClassName("rod1")[0];
var rod2 = document.getElementsByClassName("rod2")[0];
var ball = document.getElementsByClassName("ball")[0];
var container = document.getElementsByClassName("container")[0];
var size = 10;
var score1 = 0 , score2 = 0;
var currentRod = rod2;
var gameStart = false;
var xDirec,yDirec;

var l1 = document.getElementsByClassName("heart1");
var l2 = document.getElementsByClassName("heart2");
var livesNo1 = 3,livesNo2 = 3;

var notIntial = true , id;
var startB = document.getElementById("start-button");
var newGameB = document.getElementById("new-game-button");
var scoreDisp1 = document.getElementById("score-display1");
var scoreDisp2 = document.getElementById("score-display2");


newGameB.addEventListener('click',newGame);
startB.addEventListener('click',visibleScreen);
document.addEventListener('keydown',moveRod);
document.addEventListener('keypress',launchBall);
window.addEventListener('resize', setGame);