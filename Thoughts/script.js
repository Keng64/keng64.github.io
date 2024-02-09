setInterval(loop, 5);

function loop() {
  let para = document.createElement("p");
  para.innerText = "GYAAAAAAAATT";
  para.style.position = "absolute";
  para.style.left = Math.random() * (99) + 1 + "%";
  para.style.top = Math.random() * (99) + 1 + "%";
  document.body.appendChild(para);

  let bill_nye = document.createElement("img");
  bill_nye.style.position = "absolute";
  bill_nye.style.left = Math.random() * (99) + 1 + "%";
  bill_nye.style.top = Math.random() * (99) + 1 + "%";
  bill_nye.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10d7e8b1-9fe1-4c41-aeb7-331f4fb188aa/de36eea-d271bd08-275a-4281-936e-766cdc80715f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEwZDdlOGIxLTlmZTEtNGM0MS1hZWI3LTMzMWY0ZmIxODhhYVwvZGUzNmVlYS1kMjcxYmQwOC0yNzVhLTQyODEtOTM2ZS03NjZjZGM4MDcxNWYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6rNjSNlMC85-x_k5lV5p1xujGd6uR2OimoJ1hp6gIKE";
  document.body.appendChild(para);
}