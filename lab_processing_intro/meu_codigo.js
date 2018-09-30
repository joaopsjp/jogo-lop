var anima; 
var imgsAndando = [];
var contFrame = 0; 

function preload() {

    imgsAndando = loadImage("imagens/Andando(0).png");
  
}

function setup() {
  frameRate(30); 
  createCanvas(400,600); 
}

function draw() {
  background(0); 
  
  anima = imgsAndando[contFrame];
  image( anima, 0, 50);
  contFrame++;
  if ( contFrame > 19 ) {
     contFrame = 0;  
  }
}


var x=35,y;


function setup() {
  background(0, 0, 0);
  createCanvas(windowWidth, windowHeight);
  y=windowHeight-35
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 0, 0);
  ellipse(x, y, 60, 60);
  fill('pink');
  stroke('rgba(0,55,0,0.25)');
strokeWeight(3);
if(x<windowWidth+35){
if (keyIsDown(LEFT_ARROW))
    x-=9;

  if (keyIsDown(RIGHT_ARROW))
    x+=9;
}
else{
  x=0
  
}
textSize(45); // define o tamanho da fonte
  fill(255); 
  text("Boa Sorte!", ((windowWidth/2)-100), 50);
  
  
}