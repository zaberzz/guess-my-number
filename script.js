"use strict";
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ NO NUMber";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🏆 You Win the game";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score < 1) {
      document.querySelector(".message").textContent = "📈 Too low";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent = "You lose the game";
    document.querySelector(".score").textContent = 0;
  }
});
