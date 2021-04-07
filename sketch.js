var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers, distance=0;
var database;

var form, player, game;
var car1, car2, car3, car4, cars;
var car1_img
var car2_img
var car3_img
var car4_img
var track_img
var ground_img
function preload(){
  car1_img=loadImage("images/car1.png")
  car2_img=loadImage("images/car2.png")
  car3_img=loadImage("images/car3.png")
  car4_img=loadImage("images/car4.png")
  track_img=loadImage("images/track.jpg")
  ground_img=loadImage("images/ground.png")
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount===4){
    game.update(1);

  }
  if(gameState===1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}

