/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  randomCard();
  colorSuit();
};

const suits = ["♦", "♥", "♠", "♣"];
const cards = ["A", 2, 3, 4, 5, 6, 7, 8];

// function random
function randomCard() {
  let suit = suits[Math.floor(Math.random() * suits.length)];
  let card = cards[Math.floor(Math.random() * cards.length)];

  document.getElementById("randomCard").innerHTML = card;
  document.getElementById("suitCard").innerHTML = suit;
  function colorSuit() {
    if (suits === "♥" || "♦") {
      document.querySelector("#suitCard").style.color = "red";
    } else if (suits === "♠" || "♣") {
      document.querySelector("#suitCard").style.color = "black";
    }
  }
}

const suits = [":hearts:", ":spades:", ":clubs:", ":diamonds:"];
const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
window.onload = function() {
  //write your code here
  randomCard();
};

//function to change color on red or black

//pseudocode
// crear html basico
// crear dos arrays
// crear funcion random variables
// crear el boton para imprimir
