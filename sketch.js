var banana,bananaImage,foodgroup;
var dog,dogImage;
var obstacle,obstacleImage,obstacleGroup;
var backgrounda;
var Iground,ground;
var score=0;
var END=0;
var PLAY=1;
var gameState=PLAY;

function preload(){
  
bananaImage=loadImage("bananananan.png");
obstacleImage=loadImage("fire.gif");
dogImage=loadImage("dogimg1.png");

 }

function setup() {
  createCanvas(400, 400);
  
  
  banana=createSprite(250,200,0,0);
  banana.addImage(bananaImage);
  banana.scale=0.15;
  
  obstacle=createSprite(300,200,0,0);
  obstacle=addImage(obstacleImage);
  obstacle.scale=0.15;
  
  Iground=createSprite(400,200,400,10);
  Iground.visible=false;
  
  ground=createSprite(400,200,400,40);
  
 
  
}

function draw() {
  background(220);
  
  if(gameState===PLAY){
  if (monkey.isTouching(foodgroup)) {
 foodgroup.destroyEach();
 //playSound("sound://category_hits/puzzle_game_button_01.mp3");
  score=score+2;
  }
  food();
  stone();

  monkey.collide(Iground);
  
  if(keyDown("space") && monkey.y >= 388.95){
      monkey.velocityY = -14 ;
      //playSound("jump.mp3");
    }

    monkey.velocityY = monkey.velocityY + 0.8;
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
if(monkey.isTouching(rockgroup)){
gameState=END;
//playSound("sound://category_tap/negative_select_2.mp3");
}
}
  
else if (gameState===END) {
  if(stone.isTouching(monkey)){
  monkey.scale=0.2;
}
 
}

  drawSprites();
 textSize(24);
 text("score : "+ score, 130, 100);
}

function food(){
  if(frameCount % 80 === 0) {
    banana = createSprite(400,365,10,40);
    banana.addImage("Ba",bananaImage);
   
    banana.velocityX=-6;
    
    //assign scale and lifetime to the obstacle           
    banana.scale = 0.15 ;
    banana.lifetime = 80;
    
    //banana.y=randomNumber(320,370);
    
    
    //add each obstacle to the group
   foodgroup.add(banana);
     
  } 
}

function stone(){
  if(frameCount % 150 === 0) {
     rock = createSprite(400,350,10,40);
    rock.addImage("Stone",obstacleImage);
   
    rock.velocityX=-6;
              
    rock.scale = 0.15 ;
    rock.lifetime = 80;

    rockgroup.add(rock);
     
  } 
}