setInterval(loop, 5);

function loop() {
  let para = document.createElement("p");
  para.innerText = "Thoughts";
  para.style.position = "absolute";
  para.style.left = Math.random() * (99) + 1 + "%";
  para.style.top = Math.random() * (99) + 1 + "%";
  document.body.appendChild(para);
}