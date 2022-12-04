let newtimeline=0;
let newscene=0;

var debounce1 = true
var debounce2 = true

function endingScreen() {
  newtimeline+=1;
  if (newscene==0) {
    if (debounce1) {
      soundEffects['victory'].play();
      debounce1=false
    }
    
    text("You saved everyone from corruption!",w*0.24,h*0.5);
    if (newtimeline>100) {
      newtimeline=0;
      newscene=1;
    }
  }else if (newscene==1) {
    debounce1=true
    if (debounce2) {
      soundEffects['speak'].play();
      debounce2=false;
    }
    image(img[9],0,0,w,h);
    if (newtimeline>200) {
      newtimeline=0;
      newscene=2;
    }
  } else if (newscene==2) {
    image(img[10],0,0,w,h);
    if (newtimeline>650) {
      newtimeline=0;
      newscene=3;
    }
  } else if (newscene==3) {
    text("Decades later...",w*0.4,h*0.5);
    if (newtimeline > 200) {
      newtimeline=0;
      newscene=4
    }
  } else if (newscene==4) {
    debounce2=true
    if (debounce1) {
      soundEffects['holy'].play();
      debounce1=false;
    }
    image(img[11],0,0,w,h);
    if (newtimeline>550) {
      newtimeline=0;
      newscene=5;
      
    }
  } else if (newscene==5) {
    if (debounce2) {
      soundEffects['victory'].play();
      debounce2=false;
    }
    text('The End!',w*0.45,h*0.5);
  }
}