var player = {
  name: "Reward",
  money: "200",
};
var cards = [];
var add = 0;
var hasBlackJack = false;
var isAlive = false;
var card1 = document.querySelectorAll(".count")[0];
var card2 = document.querySelectorAll(".count")[1];
var card3 = document.querySelector(".count3");
var displayEL = document.querySelector(".display");
var sumPlus = document.querySelector(".sum-el");
var startAgain = document.querySelector(".restart");

var playerMoney = document.querySelector(".player");
playerMoney.innerHTML = player.name + ": ₦" + player.money;

startAgain.addEventListener("click", function () {
  location.reload();
});
var newGame = document.querySelector(".start-el");
newGame.addEventListener("click", startGame);

function startGame() {
  if (isAlive === false && add === 0) {
    isAlive = true;
    var firstCard = randomNum();
    var secondCard = randomNum();
    cards = [firstCard, secondCard];
    add = firstCard + secondCard;
    renderGame();

    newGame.style.display = "none";
    borrowCard.style.display = "grid";
    startAgain.style.display = "grid";
  }
}

var borrowCard = document.querySelector(".new-card");
borrowCard.addEventListener("click", function () {
  if (isAlive === true && hasBlackJack === false) {
    var drawCard = randomNum();
    add += drawCard;
    cards.push(drawCard);

    card3.innerHTML = "New card:  ";
    for (var i = 2; i < cards.length; i++) {
      card3.innerHTML += cards[i] + " ";
    }
    renderGame();
  }
});

function renderGame() {
  card1.innerHTML = "Card 1:  " + cards[0];
  card2.innerHTML = "Card 2: " + cards[1];
  sumPlus.innerHTML = "Sum: " + add;
  if (add === 21) {
    displayEL.innerHTML = "You've got a Blackjack!🤑🎉";
    hasBlackJack = true;
    borrowCard.style.display = "none";
    playerMoney.style.display = "grid";
  } else if (add < 21) {
    displayEL.innerHTML = "Do want you want to draw a new card?😟";
  } else {
    displayEL.innerHTML = "you're out of the game!😪";
    isAlive = false;
    borrowCard.style.display = "none";
  }
}

function randomNum() {
  var random = Math.floor(Math.random() * 13) + 1;
  if (random === 1) {
    return 11;
  } else if (random > 10) {
    return 10;
  } else {
    return random;
  }
}
var gameCard = document.querySelector(".game-card");
var gameRules = document.querySelector(".game-rules");
var no = document.querySelector(".no");
var yes = document.querySelector(".yes");
yes.addEventListener("click", function () {
  gameRules.style.display = "none";
  yes.style.display = "none";
  no.style.display = "none";
  displayEL.innerHTML = "Goodluck!🙂";
  gameCard.style.display = "contents";
});

no.addEventListener("click", function () {
  gameRules.style.display = "none";
  yes.style.display = "none";
  no.style.display = "none";
  displayEL.innerHTML = "See you another time🙂";
});
