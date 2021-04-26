var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var car4Image, car2Image, car3Image, car4Image, groundImage, trackImage, wall, wall2, wall3, wall4, wall5, wall6, wall7;

var wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23;

var point1, point2, point3;

function preload() {

  carRight1 = loadAnimation("player images/blue/right/sprite_0.png", "player images/blue/right/sprite_1.png", "player images/blue/right/sprite_2.png");
  carRight2 = loadAnimation("player images/green/right/sprite_0.png", "player images/green/right/sprite_1.png", "player images/green/right/sprite_2.png");
  carRight3 = loadAnimation("player images/orange/right/sprite_0.png", "player images/orange/right/sprite_1.png", "player images/orange/right/sprite_2.png");
  carRight4 = loadAnimation("player images/yellow/right/sprite_0.png", "player images/yellow/right/sprite_1.png", "player images/yellow/right/sprite_2.png");

  carLeft1 = loadAnimation("player images/blue/left/sprite_0.png", "player images/blue/left/sprite_1.png", "player images/blue/left/sprite_2.png");
  carLeft2 = loadAnimation("player images/green/left/sprite_0.png", "player images/green/left/sprite_1.png", "player images/green/left/sprite_2.png");
  carLeft3 = loadAnimation("player images/orange/left/sprite_0.png", "player images/orange/left/sprite_1.png", "player images/orange/left/sprite_2.png");
  carLeft4 = loadAnimation("player images/yellow/left/sprite_0.png", "player images/yellow/left/sprite_1.png", "player images/yellow/left/sprite_2.png");

  carUp1 = loadAnimation("player images/blue/up/sprite_0.png", "player images/blue/up/sprite_1.png", "player images/blue/up/sprite_2.png");
  carUp2 = loadAnimation("player images/green/up/sprite_0.png", "player images/green/up/sprite_1.png", "player images/green/up/sprite_2.png");
  carUp3 = loadAnimation("player images/orange/up/sprite_0.png", "player images/orange/up/sprite_1.png", "player images/orange/up/sprite_2.png");
  carUp4 = loadAnimation("player images/yellow/up/sprite_0.png", "player images/yellow/up/sprite_1.png", "player images/yellow/up/sprite_2.png");
  
  carDown1 = loadAnimation("player images/blue/down/sprite_0.png", "player images/blue/down/sprite_1.png", "player images/blue/down/sprite_2.png");
  carDown2 = loadAnimation("player images/green/down/sprite_0.png", "player images/green/down/sprite_1.png", "player images/green/down/sprite_2.png");
  carDown3 = loadAnimation("player images/orange/down/sprite_0.png", "player images/orange/down/sprite_1.png", "player images/orange/down/sprite_2.png");
  carDown4 = loadAnimation("player images/yellow/down/sprite_0.png", "player images/yellow/down/sprite_1.png", "player images/yellow/down/sprite_2.png");

  groundImage = loadImage("images/ground.png");

  trackImage = loadImage("images/track.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth - 5, displayHeight-10);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  wall = createSprite(200,250,200,20);
      wall.shapeColor = "blue";
      wall2 = createSprite(150,50,20,100);
      wall2.shapeColor = "blue";
      wall3 = createSprite(200,300,20,100);
      wall3.shapeColor = "blue";
      wall4 = createSprite(300,110,20,100);
      wall4.shapeColor = "red";
      wall5 = createSprite(250,500,400,20);
      wall5.shapeColor = "yellow";
      wall6 = createSprite(200,700,20,200);
      wall6.shapeColor = "gray";
      wall7 = createSprite(50,700,100,20);
      wall7.shapeColor = "purple";
      wall8 = createSprite(400,700,200,20);
      wall8.shapeColor = "purple";
      wall9 = createSprite(550,700,20,200);
      wall9.shapeColor = "blue";
      wall10 = createSprite(550,250,20,300);
      wall10.shapeColor = "blue";
      wall11 = createSprite(900,500,400,20);
      wall11.shapeColor = "yellow";
      wall12 = createSprite(1600,500,400,20);
      wall12.shapeColor = "yellow";
      wall13 = createSprite(1000,150,200,20);
      wall13.shapeColor = "blue";
      wall14 = createSprite(900,700,20,220);
      wall14.shapeColor = "red";
      wall15 = createSprite(900,700,220,20);
      wall15.shapeColor = "red";
      wall16 = createSprite(1500,150,300,20);
      wall16.shapeColor = "yellow";
      wall17 = createSprite(1600,300,300,20);
      wall17.shapeColor = "yellow";
      wall18 = createSprite(900,300,20,150);
      wall18.shapeColor = "purple";
      wall19 = createSprite(800,300,200,20);
      wall19.shapeColor = "purple";
      wall20 = createSprite(1200,300,20,200);
      wall20.shapeColor = "blue";
      wall21 = createSprite(1500,700,500,20);
      wall21.shapeColor = "blue";
      wall22 = createSprite(1400,760,20,100);
      wall22.shapeColor = "blue";
      wall23 = createSprite(1600,640,20,100);
      wall23.shapeColor = "blue";

      //var r = Math.round(random(1,4));
redGroup = new Group();
blueGroup =new Group();
yellowGroup=new Group();
greenGroup = new Group();

    //r1 = red
    //r2 = blue
    //r3 = yellow
    //r4 = green

         point1 = createSprite(160, 300, 20, 20);
      point1.shapeColor = "red";

      point2 = createSprite(1000, 800, 20, 20);
      point2.shapeColor = "red";

      point3 = createSprite(1800, 100, 20, 20);
      point3.shapeColor = "red";
    
      redGroup.add(point1);
      redGroup.add(point2);
      redGroup.add(point3);

      point4 = createSprite(480, 740, 20, 20);
      point4.shapeColor = "blue";

      point5 = createSprite(1000, 600, 20, 20);
      point5.shapeColor = "blue";

      point6 = createSprite(1600, 470, 20, 20);
      point6.shapeColor = "blue";
    
      blueGroup.add(point4);
      blueGroup.add(point5);
      blueGroup.add(point6);

      point7 = createSprite(500, 620, 20, 20);
      point7.shapeColor = "yellow";

      point8 = createSprite(750, 800, 20, 20);
      point8.shapeColor = "yellow";

      point9 = createSprite(1500, 400, 20, 20);
      point9.shapeColor = "yellow";
      yellowGroup.add(point7)
      yellowGroup.add(point8)
      yellowGroup.add(point9)
    
      point10 = createSprite(160, 750, 20, 20);
      point10.shapeColor = "green";
      
      point11 = createSprite(700, 200, 20, 20);
      point11.shapeColor = "green";

      point12 = createSprite(1500, 700, 20, 20);
      point12.shapeColor = "green";

      greenGroup.add(point10);
      greenGroup.add(point11);
      greenGroup.add(point12);


}
function draw(){
  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2) {
    game.end();
  }
  
}

function isTouching(object1, object2) {
  if(object1.x - object2.x === object1.width/2 + object2.width/2 &&
    object2.x - object1.x === object2.width/2 + object1.width/2 &&
    object1.y - object2.y === object1.height/2 + object2.height/2 &&
    object2.y - object1.y === object2.height/2 + object1.height/2) {
      return true;
    }
  else{
    return false;
  }
}

function bounce(object1, object2) {
  if(object1.x - object2.x < object1.width/2 + object2.width/2) {
    object1.x = object1.x + 2;
  }
  if(object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.x = object1.x - 2
  }
  if(object1.y - object2.y < object1.height/2 + object2.height/2) {
    object1.y  = object1.y + 2
  }
  if(object2.y - object1.y < object2.height/2 + object1.height/2) {
    object1.y = object1.y - 2
  }
}