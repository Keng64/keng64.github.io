let usr;

var fps=2;
var mode=0;
var w=900;
var h=900;

var img=[];
var assets={};
var soundEffects={};


var onetimedebounce=true;

function preload() {
  // load in img assets
  img[0] = loadImage('Resources/BreakingNews1.png');
  img[1] = loadImage('Resources/BreakingNews2.png');
  img[2] = loadImage('Resources/White House 1.PNG');
  img[3] = loadImage('Resources/White House 2.PNG');
  img[4] = loadImage('Resources/rousseau1.png');
  img[5] = loadImage('Resources/rousseau2.png');
  img[6] = loadImage('Resources/rousseau3.png');
  img[7] = loadImage('Resources/freehands.png');
  img[8] = loadImage('Resources/chainedhands.png');
  img[9] = loadImage('Resources/EndingSceneResources/cityPart2.png');
  img[10] = loadImage('Resources/EndingSceneResources/cityPart3.png');
  img[11] = loadImage('Resources/EndingSceneResources/utopiaEnd.png');

  // load in assets
  assets["enemy1"] = loadImage('Resources/handcuff2.png');
  assets["ground"] = loadImage('Resources/grass.png');
  assets["enemy2"] = loadImage('Resources/Second enemy.PNG');

  // load in sound assets
  soundEffects['speak'] = loadSound('Resources/audio/speaking.mp3');
  soundEffects['yell'] = loadSound('Resources/audio/yell.mp3');
  soundEffects['battle1'] = loadSound('Resources/audio/battle1.mp3');
  soundEffects['battle2'] = loadSound('Resources/audio/battle3.mp3');
  soundEffects['battle3'] = loadSound('Resources/audio/battle4.mp3');
  soundEffects['victory'] = loadSound('Resources/audio/victory.mp3');
  soundEffects['holy'] = loadSound('Resources/audio/holy.mp3');
  soundEffects['no'] = loadSound('Resources/audio/no.mp3');
  soundEffects['chain'] = loadSound('Resources/audio/chains.mp3');
  
  // create enemies
  enemy1=new chains(w*Math.random())
  enemy2=new chains(w*Math.random())
  enemy3=new chains(w*Math.random())
  enemy4=new chains(w*Math.random())
  
  // Additional Enemies for later rounds
  enemy5=new corrupt(w*Math.random())
  enemy6=new corrupt(w*Math.random())
  enemy7=new corrupt(w*Math.random())
  
  // ground background
  trail1=new trail(0);
  trail2=new trail(-h);
}

function setup() {
  pg=createGraphics(w, h);
  
  // player created
  usr=new player();
  
  createCanvas(w, h);
}

function draw() {
  textSize(32);
  fill(0, 102, 153,100);
  background(220);
  frameRate(fps);
  // Game menu
  if (mode == 0) {
    text('Press Enter to Start!',w*0.35,h*0.5);
  }
  //Cutscene
  if (mode == 1) {
    fps=2;
    cutscene();
  }
  // Gameplay
  if (mode == 2) {
    fps=60;
    gameplay();
  }
  if (mode==3) {
    fps=60;
    if (onetimedebounce) {
      debounce1=true;
      debounce2=true;
      onetimedebounce=false;
    }
    endingScreen()
  }
  if (mode=="death") {
    fps=60;
    deathScreen();
  }
}

function keyPressed() {
  if (mode==0) {
    if (keyCode==ENTER) {
      mode=1//kipping to gameplay
    }
  }
  
  // player movement
  pressedKeys[key] = true;
}

function keyReleased() {
  delete pressedKeys[key];
}
