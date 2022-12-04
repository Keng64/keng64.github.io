let timeline=0;
let scene=1;

var debounce11=true;
var debounce22=true;

function deathScreen() {
  timeline+=1;
  if (scene==1) {
    if (debounce11) {
      soundEffects['chain'].play();
      debounce11 = false;
    }
    image(img[7],0,0,w,h);
    if (timeline==100) {
      timeline=0;
      scene=2;
    }
  } else if (scene==2) {
    if (debounce22) {
      soundEffects['no'].play()
      debounce22 = false;
    }
    image(img[8],0,0,w,h);
    if (timeline==100) {
      timeline=0;
      scene=3;
    }
  } else if (scene==3) {
    image(img[8],0,0,w,h);
    text("Society got you in chains!",w*0.22,50);
    if (timeline==150) {
      debounce11=true
      debounce22=true
      timeline=0;
      scene=1;
      dead=false;
      mode=2;
    }
  }
}