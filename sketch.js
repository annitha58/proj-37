var bananaImage, obstacleImage, scene, sceneImage, monkeyMoving;
var obstacleGroup, bananaGroup, score, monkey, ground, index, monkeys;

function preload(){
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  sceneImage = loadImage("jungle.png");
  monkeyMoving = loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  scene = createSprite(displayWidth - 20, displayHeight-30);
  scene.addImage("scene", sceneImage);
  scene.velocityX = -5;
  if(scene.x < 0){
    scene.x = scene.width / 2;
  }
  
  ground = createSprite(300, 210, displayWidth - 40, displayHeight-60);
  ground.visible = false;
  
  monkey = createSprite(50,160, 20, 50);
  monkey.addAnimation("moving", monkeyMoving);
  
  obstacleGroup = new Group();
  bananaGroup = new Group();
}

function draw() {
  background(220);
  
  if(scene.x < 0){
    scene.x = scene.width / 2;
  }
  if (keyCode === UP_ARROW && monkey.y >= 250){
    monkey.velocityY = -12;
  } 
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  spawnBananas();
  spawnObstacles();
  
  monkey.collide(ground);

  var index = 0;
  var monkeys = 0;

  if(index === monkeys.index){
	  camera.position.x = displayWidth/2;
	  camera.position.y = monkey.y;
  }
  
  drawSprites();
}

function spawnObstaclses() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,180, displayWidth - 40, displayHeight-60);
    obstacle.velocityX = -6;
    obstacle.addImage("obstacle", obstacleImage);
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;       
      case 6: obstacle.addImage(obstacle6);
              break;        
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
}

function spawnBananas(){
  if(frameCount % 60 === 0) {
    var bananas = createSprite(600,180, displayWidth - 40, displayHeight-60);
    bananas.velocityX = -6;
    bananas.addImage("bananas", bananaImage);
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
    
    bananaGroup.add(banana);
  }
}