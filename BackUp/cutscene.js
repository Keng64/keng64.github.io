var addr=0;
var cutmode=0;
var debounce=true
var debounce2=true

function cutscene() {
  if (cutmode==0) {
    if (addr > 13) {
      addr=0;
      cutmode=1;
    }else if (addr > 1) {
      if (debounce) {
        soundEffects['speak'].play();
        debounce=false;
      }
      image(img[1],0,0,w,h);
    } else if (addr < 2) {
      image(img[0],0,0,w,h);
    }
    addr+=1;
  } else if (cutmode == 1) {
    debounce=true;
    if (debounce2) {
      soundEffects['yell'].play();
      debounce2=false;
    }
    soundEffects['speak'].stop();
    
    if (addr==14) {
      cutmode=2;
      addr=0;
    }
    if (addr%2==0) {
      image(img[2],0,0,w,h);
    } else {
      image(img[3],0,0,w,h);
    }
    addr+=1;
  } else if (cutmode == 2) {
    soundEffects['yell'].stop();
    if (addr > 13) {
      
      soundEffects['speak'].stop();
      addr=0;
      mode=2;
    }else if (addr > 3) {
      if (debounce) {
        soundEffects['speak'].play();
        debounce=false;
      }
      image(img[6],0,0,w,h);
    } else if (addr < 4) {
      image(img[4],0,0,w,h);
    }
    addr+=1;
  } else {
    soundEffects['speak'].stop();
  }
}