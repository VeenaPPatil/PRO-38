var Dcakesimg , hole , backimg, score , doraemon , Doraemonimg , back , dGroup , holeGroup , ground , gameover ;

var score=0;

function preload(){

  back = loadImage("background1.jpg");
  
  Doraemonimg = loadAnimation("d1.png","d2.png","d3.png","d4.png","d5.png","d6.png");
  
  Dcakesimg = loadImage("doraCakes.jpg");
  hole = loadImage("blackhole.png");
}

function setup() {
  
createCanvas(800, 400);
  
  backimg = createSprite(0,0,800,400);
  backimg.addImage("backimg",back);
  backimg.scale = 1.5;
  backimg.x = backimg.width /2;
  //backimg.velocityX = -4;
  
  doraemon = createSprite(100,340,20,50);
  doraemon.addAnimation("running",Doraemonimg);
  doraemon.scale=0.1;
  
  ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  holeGroup = new Group();
  dGroup = new Group();
  
  score = 0;
  
}

function draw() {
  
  background(255);
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  if (backimg.x<100){
    backimg.x = backimg.width/2;
  }
  
  if(dGroup.isTouching(doraemon)){
      dGroup.destroyEach();
    score = score + 2;
    }
  
  switch(score){
        case 10: doraemon.scale=0.12;
                break;
        case 20: doraemon.scale=0.14;
                break;
        case 30: doraemon.scale=0.16;
                break;
        case 40: doraemon.scale=0.18;
                break;
        default: break;
    }
  
   
  if(keyDown("space")) {
    doraemon.velocityY = -12;
  }
  
  doraemon.velocityY = monkey.velocityY + 0.8;
  
  
  doraemon.collide(ground);
  
  spawnd();
  spawnblackhole(); 
  
  if(holeGroup.isTouching(doraemon)) {
    doraemon.scale = 0.08;
    //score = score - 2;
  }
  
    
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:",+ score, 150, 100);
}

function spawnd() {
  
  if(frameCount % 80 === 0){
   var dcake= createSprite(600,250,40,20);
   dcake.addImage("doraemon",Dcakeimg); 
   dcake.scale =0.05; 
   dcake.y = random(120,200);
   dcake.velocityX = -5;
   banana.lifetime = 300;
   dGroup.add(dcake);
   Doraemon.depth = dcake.depth + 1; 
  }
  
}

function spawnblackhole() {
  
  if(frameCount % 300 === 0) {
    var bhole = createSprite(800,350,10,40);
    bhole.velocityX = -6;
    bhole.addImage("blackhole",hole);
    bhole.scale = 0.2;
    bhole.lifetime = 300;
    holeGroup.add(bhole);
  }
  
}  
  
  //https://editor.p5js.org/rupin/sketches/5e1hYE4iZ


//https://editor.p5js.org/ramya.aswadhati/sketches/EhIeIiTT_
