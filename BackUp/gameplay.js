var howmanypassthrough=0;
var pressedKeys = {};
var enLocation=[];
var hba=35
var dead;

var debounce1=true
var debounce2=true

var start=0;
var gameRound = 1;

class chains {
  constructor(_width) {
    this.x=_width;
    this.enemy=assets["enemy1"]; // Enemy Image
    this.size=100;
    this.y=-(this.size*(Math.random()*3));
    this.speed=10
  }
  
  increaseSpeed() {
    this.speed+=5
  }
  decreaseSpeed() {
    this.speed-=5
  }
  
  restart() {
    this.x=Math.random()*w;
    this.y=-(this.size*(Math.random()*3));
  }
  
  move() {
    if (this.y> h) {
      howmanypassthrough+=1;
      this.y=-(this.size*(Math.random()*3));
      this.x=Math.random()*w;
    } else {
      this.y+=this.speed;
    }
    return [this.x-hba,this.y-hba,this.size-hba];
  }
  
  show() {
    image(this.enemy,this.x,this.y,this.size,this.size);
  }
}

class corrupt {
  constructor(_width) {
    this.x=_width;
    this.enemy=assets["enemy2"]; // Enemy Image
    this.size=100;
    this.y=-(this.size*(Math.random()*3));
    this.speed=15
  }
  
  increaseSpeed() {
    this.speed+=5
  }
  decreaseSpeed() {
    this.speed-=5
  }
  
  restart() {
    this.x=Math.random()*w;
    this.y=-(this.size*(Math.random()*3));
  }
  
  move() {
    if (this.y> h) {
      howmanypassthrough+=1;
      this.y=-(this.size*(Math.random()*3));
      this.x=Math.random()*w;
    } else {
      this.y+=this.speed;
    }
    return [this.x-hba,this.y-hba,this.size-hba];
  }
  
  show() {
    image(this.enemy,this.x,this.y,this.size,this.size);
  }
}

class trail{
  constructor(_height) {
    this.y=_height;
    this.img=assets['ground'];
  }
  
  move() {
    if (this.y > h-40) {
      this.y=-(h);
    } else {
      this.y+=5;
    }
  }
  
  show() {
    image(this.img,0,this.y,w,h);
  }
}

class player { // PLAYER
  constructor() {
    this.size=70;
    this.x=(w*0.5)-this.size;
    this.y=(h*0.7);
    this.img=img[4];
    
    this.speed = 10;
  }
  
  restart() {
    this.x=(w*0.5)-this.size;
    this.y=(h*0.7);
  }
  
  intersects(other) {
    if (this.x + this.size >= other[0]+50 &&
        this.x <= other[0] + other[2]*2 &&
        this.y + this.size >= other[1]+50 &&
        this.y <= other[1] + other[2]*2
       ) {
      mode="death";
      return true
    } else {
      return false
    }
  }
  
  update() {
    // Movements
    let mvmt = createVector(0,0);
    
    if (pressedKeys.a) {
      mvmt.x -=1;
    }
    if (pressedKeys.d) {
      mvmt.x+=1;
    }
    if (pressedKeys.w) {
      mvmt.y-=1;
    }
    if (pressedKeys.s) {
      mvmt.y+=1;
    }
    
    if (this.y > h-this.size-this.speed) {
      this.y = h-this.size-this.speed;
    }
    if (this.y < 0) {
      this.y = 0;
    }
    if (this.x > w-this.size) {
      this.x = w-this.size;
    }
    if (this.x < 0) {
      this.x = 0;
    }
    
    mvmt.setMag(this.speed);
    this.x+=mvmt.x;
    this.y+=mvmt.y;

  }
  
  show() {
    image(this.img,this.x,this.y,this.size,this.size);
  }
}

function gameplay() {
  dead=false;
  start+=1;
  if (dead==true) {
    deathScreen();
  } 
  if (dead==false && gameRound==1) {
    if (start < 100) {
      if (debounce1) {
        soundEffects['battle1'].stop();
        soundEffects['battle2'].stop();
        soundEffects['battle3'].stop();
        
        soundEffects['battle1'].play();
        debounce1=false
      }
      text('Round 1/3!',w*0.4,h*0.5);
      usr.restart();
    }else if (start > 100 && start < 300) {
      text('Round 1/3!',w*0.35,h*0.5);
      trail1.show();
      trail1.move();

      trail2.show();
      trail2.move();
      
      usr.update();
      usr.show();
    } else {
      trail1.show();
      trail1.move();

      trail2.show();
      trail2.move();

      enemy1.show();
      enLocation[0]=enemy1.move();

      enemy2.show();
      enLocation[1]=enemy2.move();

      enemy3.show();
      enLocation[2]=enemy3.move();

      enemy4.show();
      enLocation[3]=enemy4.move();

      usr.update();
      usr.show();

      // User collision detection

      collision();
      if (howmanypassthrough >= 40) {
        gameRound=2;
        howmanypassthrough=0;
        start=0;
        enemy1.increaseSpeed();
        enemy2.increaseSpeed();
        enemy3.increaseSpeed();
        enemy4.increaseSpeed();
      }
    }
  } else if (dead==false && gameRound==2) { // Round two
    if (start < 100) {
      debounce1=true
      if (debounce2) {
        soundEffects['battle1'].stop();
        soundEffects['battle2'].stop();
        soundEffects['battle3'].stop();
        
        soundEffects['battle2'].play();
        debounce2=false
      }
      text('Round 2/3!',w*0.4,h*0.5);
      usr.restart();
    }else if (start > 100 && start < 300) {
      text('Round 2/3!',w*0.35,h*0.5);
      enemy1.restart();
      enemy2.restart();
      enemy3.restart();
      enemy4.restart();

      enemy5.restart();
      enemy6.restart();
      enemy7.restart();
      
      trail1.show();
      trail1.move();

      trail2.show();
      trail2.move();
      
      usr.update();
      usr.show();
    } else {
      trail1.show();
      trail1.move();

      trail2.show();
      trail2.move();

      enemy1.show();
      enLocation[0]=enemy1.move();

      enemy2.show();
      enLocation[1]=enemy2.move();

      enemy3.show();
      enLocation[2]=enemy3.move();

      enemy4.show();
      enLocation[3]=enemy4.move();

      usr.update();
      usr.show();

      // User collision detection

      collision();
      if (howmanypassthrough >= 80) {
        enemy1.restart();
        enemy2.restart();
        enemy3.restart();
        enemy4.restart();
        enemy5.restart();
        enemy6.restart();
        enemy7.restart();
        gameRound=3;
        howmanypassthrough=0;
        start=0;
        enemy1.decreaseSpeed();
        enemy2.decreaseSpeed();
        enemy3.decreaseSpeed();
        enemy4.decreaseSpeed();
      }
    }
  } else if (dead==false && gameRound==3) {
    if (start < 100) {
      if (debounce1) {
        soundEffects['battle1'].stop();
        soundEffects['battle2'].stop();
        soundEffects['battle3'].stop();
        
        soundEffects['battle3'].play();
        debounce1=false
      }
      text('FINAL ROUND!',w*0.4,h*0.5);
      usr.restart();
    }else if (start > 100 && start < 300) {
      text('FINAL ROUND!',w*0.35,h*0.5);
      enemy1.restart();
      enemy2.restart();
      enemy3.restart();
      enemy4.restart();

      enemy5.restart();
      enemy6.restart();
      enemy7.restart();
      
      trail1.show();
      trail1.move();

      trail2.show();
      trail2.move();
      
      usr.update();
      usr.show();
    } else {
      trail1.show();
      trail1.move();

      trail2.show();
      trail2.move();

      enemy1.show();
      enLocation[0]=enemy1.move();

      enemy2.show();
      enLocation[1]=enemy2.move();

      enemy3.show();
      enLocation[2]=enemy3.move();

      enemy4.show();
      enLocation[3]=enemy4.move();
      
      enemy5.show();
      enLocation[4]=enemy5.move();

      enemy6.show();
      enLocation[5]=enemy6.move();
      
      enemy7.show();
      enLocation[6]=enemy7.move();
      
      usr.update();
      usr.show();

      // User collision detection
      collision();
      
      if (howmanypassthrough >= 80) {
        soundEffects['battle1'].stop();
        soundEffects['battle2'].stop();
        soundEffects['battle3'].stop();
        mode=3;
        gameRound=1;
        howmanypassthrough=0;
        start=0;
      }
    }
  }
}

function collision() {
  for (let x=0;x<enLocation.length;x++) {
    if (usr.intersects(enLocation[x])) {
      debounce1=true
      debounce2=true
      
      soundEffects['battle1'].stop();
      soundEffects['battle2'].stop();
      soundEffects['battle3'].stop();
      start=0;
      howmanypassthrough = 0;
      enemy1.restart();
      enemy2.restart();
      enemy3.restart();
      enemy4.restart();

      enemy5.restart();
      enemy6.restart();
      enemy7.restart();
    } 
  }
}