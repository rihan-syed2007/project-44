var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 =loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System();
  security = new Security();
}

function draw() {
  background(bg);

  textSize(20);
  fill("lightblue");
  text("SCORE  "+score,500,30);

  clues();
  security.display();

  // Add code to display score in the middle of the screen


  // Add code to display the end screen

  if(score===1){
    fill("lightblue");
    textSize(30);
    text("EXCELLENT",450,250);
  }

  if(score===2){
    fill("lightblue");
    textSize(30);
    text("AWESOME",450,250);
  }



  if(score===3){
    clear();
    background(bg2);
    fill("black");
    textSize(70);
    text("TREASURE      UNLOCKED",50,250);
  }

  drawSprites()
}