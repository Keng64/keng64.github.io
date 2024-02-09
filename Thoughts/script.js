setInterval(loop, 50);

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function loop() {
  let para = document.createElement("p");
  para.innerText = "Thoughts";
  para.style.position = "absolute";
  para.style.left = Math.random() * (99) + 1 + "%";
  para.style.top = Math.random() * (99) + 1 + "%";
  document.body.appendChild(para);
  para.style.color = getRandomColor();
}