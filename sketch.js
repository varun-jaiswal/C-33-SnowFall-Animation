var snowman,snowmanImg,hailstoneImg;
var ball1 , backgroundImg;



function preload(){
  getBackgroundImg()
  snowBg = loadImage("snow2.jpg");
  snowmanImg = loadImage("snowman.png");
  hailstoneImg = loadImage("snow5.webp");

}

function setup() {
  createCanvas(1400,700);

  snowman = createSprite(400, 500, 50, 50);
  snowman.addImage("snowman",snowmanImg);
  snowman.scale = 0.5;
}

function draw() {
  if(backgroundImg!=null ){
    background(backgroundImg);
    }else{background(snowBg)
} 


  if(frameCount%5  === 0){
    var snowfall = createSprite(random(30,1380),-20,50,50);
    snowfall.velocityY = 20;
    snowfall.addImage("hailstone",hailstoneImg);
    snowfall.scale = 0.1;
  }

  if(keyDown("right")){
    snowman.velocityX = 5;
  } else{
    snowman.velocityY = 0;
    snowman.velocityX = 0;
  }

  if(keyDown("left")){
    snowman.velocityX = -5;
  }

   
  drawSprites();
}
async function getBackgroundImg(){
  var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJSON=await response.json();
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13);
  if(hour>=06&&hour<=12){
    snow="snow1.jpg";
  }else if(hour>=12&&hour==18){
    snow="snow2.jpg";
  }
  else{
    snow="snow3.jpg";
  }
  backgroundImg=loadImage(snow);
  console.log(backgroundImg);
  }