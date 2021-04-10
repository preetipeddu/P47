var question;
var database;
var gameState = 0;
var game;
var allPlayers;
var form;
var playerCount;
var player;
var backgroundImage;
var yes, no;
var yesImage, noImage, question1Image;

function preload(){
   backgroundImage = loadImage("newbackground.png");
   yesImage = loadImage("Yes.png");
   noImage = loadImage("No.png");
   question1Image = loadImage("question1.png");
}

function setup(){
 createCanvas(displayWidth, displayHeight);
 database = firebase.database();
 game = new Game;
 game.getGameState();
 game.start();

}
 function draw(){
 background(backgroundImage);

 if(playerCount === 2){
    game.update(1);
 }
 if(gameState ===1){
   game.play();

 }
 
 drawSprites();
}

