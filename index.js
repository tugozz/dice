const playerOne = document.getElementById("player1");
const playerTwo = document.getElementById("player2");
const num1 = document.getElementById("player1Num");
const num2 = document.getElementById("player2Num");
const result = document.getElementById("result");
const resetButton = document.getElementById("resetGame");

const getIndex = () => {
  return Math.floor(Math.random() * 6);
};

const dice = [
  "./photos/dice-six-faces-onee.png",
  "./photos/dice-six-faces-two.png",
  "./photos/dice-six-faces-three.png",
  "./photos/dice-six-faces-four.png",
  "./photos/dice-six-faces-five.png",
  "./photos/dice-six-faces-six.png",
];

let player1Point;
let player2Point;
let gameActive = true;

playerOne.addEventListener("click", () => {
  if (!gameActive) return;

  const index = getIndex();
  player1Point = index;
  num1.src = dice[index];
  result.classList.add("result-block");

  if (player2Point !== undefined) {
    if (player2Point > index) {
      result.innerText = "Player 2 Won";
      gameActive = false;
    } else if (player2Point < index) {
      result.innerText = "Player 1 Won";
      gameActive = false;
    } else {
      result.innerText = "Draw";
      gameActive = false;
    }
  }
});

playerTwo.addEventListener("click", () => {
  if (!gameActive) return;

  const index = getIndex();
  player2Point = index;
  num2.src = dice[index];

  if (player1Point !== undefined) {
    if (player1Point > index) {
      result.innerText = "Player 1 won";
      gameActive = false;
    } else if (player1Point < index) {
      result.innerText = "Player 2 won";
      gameActive = false;
    } else {
      result.innerText = "Draw";
      gameActive = false;
    }
  }
});

resetButton.addEventListener("click", () => {
  // Reset game state
  player1Point = undefined;
  player2Point = undefined;
  gameActive = true;

  // Reset display
  num1.src = "./photos/dice-six-faces-one.png";
  num2.src = "./photos/dice-six-faces-one.png";
  result.innerText = "";
  result.classList.remove("result-block");
});
