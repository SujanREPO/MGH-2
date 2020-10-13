var backImage,backgr;
var player, player_running;
var ground,ground_img;

var FoodGroup, bananaImage;
var obstaclesGroup, obstacle_img;

var gameOver;
var score=0;


function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  

  bananaImage = loadImage("banana.png");
  obstacle_img = loadImage("stone.png"); 
  
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
}

function draw() {
  
  background(255);
    
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  } 
  
   
    if(keyDown("space") ) {
      player.velocityY = -15  ;
    }
    player.velocityY = player.velocityY + 0.8;
  
  if(FoodGroup.isTouching(player)){
   player.scale=0.12  
   score = score+2
  }
  
  if(obstaclesGroup.isTouching(player)){
      player.scale=0.05 
      score = score-4
     }
  
    player.collide(ground);
    spawnFood();
    spawnObstacles();
 
    
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
}

function spawnFood() {
  //write code here to spawn the food
  if (World.frameCount % 50 === 0) {
    var fruit = createSprite(400,190,40,10);
    fruit.x = 800;
    fruit.addImage (bananaImage );
    fruit.scale = 0.05;
    fruit.velocityX = -10;
    FoodGroup.add(fruit)
   }
 
}

function spawnObstacles() {
  
  //write code here to spawn the balloons
  if (World.frameCount % 50 === 0) {
    var obstacle = createSprite(400,340,40,10);
    obstacle.x = 800;
    obstacle.addImage (obstacle_img);
    obstacle.scale = 0.3;
    obstacle.velocityX = -10;
    obstaclesGroup.add(obstacle);
   }
 }