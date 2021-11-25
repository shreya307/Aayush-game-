

var soldier, soldierImg;
var snake, stone, backgroundImg, appleImg, apple;
var stoneImg, snakeImg, flagImg;
var flag, gameover, gameoverImg, restartImg;

var stonegroup, snakegroup, applegroup;

var invisibleGround;

var score;

function preload(){
  
  soldierImg = loadImage("soldier.png");
  backgroundImg = loadImage("bck.png");
  stoneImg = loadImage("stone+2.png");
  snakeImg = loadImage("snake.png");
  flagImg = loadImage("flag.png");
  gameoverImg = loadImage("game over.png");
  appleImg = loadImage("apple.png");
  restartImg = loadImage("game restart.png");

}

function setup() {
  createCanvas(1520, 740);

  score = 0;
  
  //create a soldier sprite
  soldier = createSprite(50,490,20,50);
 soldier.addImage("soldier", soldierImg );
  
  //adding scale and position to soldier
  soldier.scale = 0.2;


  flag = createSprite(1350, 200, 50, 80);
  flag.addImage("flag", flagImg);
  flag.scale = 0.6;


 


  gameover = createSprite(760, 370, 50, 50);
  gameover.addImage("gameover", gameoverImg);
  gameover.scale = 0.2;

  gameover.visible = false;


  invisibleGround = createSprite(10, 499, 4000, 10);
  invisibleGround.visible = false;

 stonegroup = new Group();
 snakegroup = new Group();
 applegroup = new Group();

}

function draw() {
  background(backgroundImg);
   
   fill("red");
   textSize(50);
   text("Score: "+ score, 50, 50);
   

    if(keyDown("right_arrow")&& soldier.x >= 0) {
      soldier.velocityX= 2;
      
  }

  if(keyDown("left_arrow")&& soldier.x >= 0) {
    soldier.velocityX= -2;
    
}

if(soldier.collide(apple)){
  score = score + 10;
}

  soldier.collide(invisibleGround);
 
  spawnSnakes();
  spawnStones();
  spawnApples();
  
  drawSprites();
}


function spawnSnakes(){
  if(frameCount % 100 === 0){
    snake = createSprite(1550, 400, 40, 10);
    snake.addImage(snakeImg);
    snake.y = Math.round(random(300, 400));
    snake.velocityX = -4;
    snake.scale = 0.1;
    snake.lifetime = 400;

    
    snakegroup.add(snake);
  }
}


function spawnStones(){
  if(frameCount % 200 === 0){
    stone = createSprite(20, 10, 15, 15);
    stone.addImage(stoneImg);
    stone.x = Math.round(random(20, 1520));
    stone.velocityY = 4;
    stone.scale = 0.1
    stone.lifetime = 200;


    stonegroup.add(stone);
  }
}

function spawnApples(){
  if(frameCount % 180 ===0){
    apple = createSprite(50, 50, 20, 20);
    apple.addImage(appleImg);
    apple.x = Math.round(random(30, 1400));
    apple.velocityY = 4;
    apple.scale = 0.05;
    apple.lifetime = 200;


    applegroup.add(apple);
  }
}

