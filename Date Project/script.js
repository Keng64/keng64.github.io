setInterval(draw, 1);

let obj_pos_x = 306;
let obj_pos_y = 237;

let init_pos_x = document.getElementById('no').offsetLeft;
let init_pos_y = document.getElementById('no').offsetTop;

let yes_init_pos_x = document.getElementById('yes').offsetLeft;
let yes_init_pos_y = document.getElementById('yes').offsetTop;

let obj_movementspeed=10;
let temp=0;

let debounce = false;
let starttemp=0;

function main(event) {

  let x = event.clientX;
  let y = event.clientY;
  let _position = `X: ${x}<br>Y: ${y}`;

  starttemp+=1;
  
  var d = document.getElementById('no');
  d.style.position = "absolute";
  if (starttemp < 10) {
    d.style.left = "50%";
    d.style.top = "50%";
    obj_pos_x=d.offsetLeft;
    obj_pos_y=d.offsetTop;
    console.log(obj_pos_x,obj_pos_y);
  } else {
    d.style.left = obj_pos_x+"px";
    d.style.top = obj_pos_y+"px";
  }
  
  // DETECT HIT BOX TOP LEFT OF OBJECT
  if (x > obj_pos_x-50 && x < obj_pos_x+25 && y > obj_pos_y-50 && y < obj_pos_y+25) {
    obj_pos_x+=obj_movementspeed;
    obj_pos_y+=obj_movementspeed;

    document.getElementById('no_image').src="Mushrooms/NO - BOTTOM RIGHT.png";
    temp+=1;
  } else if (x > obj_pos_x+15 && x < obj_pos_x+100 && y > obj_pos_y-100 && y < obj_pos_y+25) { // DETECT HIT BOX IN THE TOP MIDDLE OF OBJECT
    obj_pos_y+=obj_movementspeed;

    document.getElementById('no_image').src="Mushrooms/NO - BOTTOM MIDDLE.png";
    temp+=1;
  } else if (x > obj_pos_x+100 && x < obj_pos_x+150 && y > obj_pos_y-50 && y < obj_pos_y+25) { // DETECT HIT BOX IN THE TOP RIGHT OF THE OBJECT
    obj_pos_x-=obj_movementspeed;
    obj_pos_y+=obj_movementspeed;

    document.getElementById('no_image').src="Mushrooms/NO - BOTTOM LEFT.png";
    temp+=1;
  } else if (x > obj_pos_x-50 && x < obj_pos_x+25 && y > obj_pos_y+25 && y < obj_pos_y+100) { // DETECT HIT BOX IN BOTTOM LEFT OF OBJECT
    obj_pos_x+=obj_movementspeed;
    obj_pos_y-=obj_movementspeed;

    document.getElementById('no_image').src="Mushrooms/NO - TOP RIGHT.png";
    temp+=1;
  } else if (x > obj_pos_x+15.333 && x < obj_pos_x+100 && y > obj_pos_y+25 && y < obj_pos_y+150) { // DETECT HIT BOX IN BOTTOM MIDDLE OF OBJECT
    obj_pos_y-=obj_movementspeed;

    document.getElementById('no_image').src="Mushrooms/NO - TOP MIDDLE.png";
    temp+=1;
  } else if (x > obj_pos_x+100 && x < obj_pos_x+150 && y > obj_pos_y+25 && y < obj_pos_y+120) { // DETECT HIT BOX IN BOTTOM RIGHT OF OBJECT
    obj_pos_x-=obj_movementspeed;
    obj_pos_y-=obj_movementspeed;

    document.getElementById('no_image').src="Mushrooms/NO - TOP LEFT.png";
    temp+=1;
  }
  
  if (obj_pos_y < 0) {
    d.style.left = "50%";
    d.style.top = "50%";
    obj_pos_y=init_pos_y;
    obj_pos_x=init_pos_x;
  } else if (obj_pos_x > 1200) {
    obj_pos_y=init_pos_y;
    obj_pos_x=init_pos_x;
  } else if (obj_pos_y > 800) {
    obj_pos_y=init_pos_y;
    obj_pos_x=init_pos_x;
  } else if (obj_pos_x < 80) {
    obj_pos_y=init_pos_y;
    obj_pos_x=init_pos_x;
  } 
}

function animationClick() {
  debounce=true;
}

var y = document.querySelector("#yes_image");
var init_width = y.clientWidth;
var init_height = y.clientHeight;

let sizeMultiplier = 2;
let posMultiplier = 1

function draw() {
  if (debounce) {
    //console.log("debounce");
    document.getElementById('yes_image').src="Mushrooms/YES - HUG.png";
    document.getElementById("no").style.visibility = "hidden";
    
    var yes = document.getElementById('yes_image');
    var yes_button = document.getElementById('yes');
    init_width+=sizeMultiplier;
    init_height+=sizeMultiplier;
    yes_init_pos_x-=posMultiplier;
    yes_init_pos_y-=posMultiplier;
    
    yes.style.width = init_width+"px";
    yes.style.height = init_height+"px";
    yes_button.style.left = yes_init_pos_x+"px";
    yes_button.style.top = yes_init_pos_y+"px";

    sizeMultiplier+=0.02;
    posMultiplier+=0.01;

    if (init_height > 1500) {
      debounce=false;
    }
  } else {
  document.addEventListener("mousemove", main);
  }
}
