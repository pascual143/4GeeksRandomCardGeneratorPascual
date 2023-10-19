/* eslint-disable */
import "bootstrap";
import "./style.css";

const suits = ["♥", "♦", "♠", "♣"];
const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

window.onload = function() {
  //write your code here
  randomCard();
  //colorSuit();

  // function random
  function randomCard() {
    let suit = Math.floor(Math.random() * suits.length);
    let card = Math.floor(Math.random() * cards.length);

    let randomSuit = suits[suit];
    let randomCard = cards[card];

    document.getElementById("randomCard").innerHTML = randomCard;
    document.getElementById("suitCard").innerHTML = randomSuit;

    //var colorSuits = colorSuit();
    if (randomSuit === "♥" || randomSuit === "♦") {
      document.querySelector("#suitCard").style.color = "red";
    } else if (randomSuit === "♠" || randomSuit === "♣") {
      document.querySelector("#suitCard").style.color = "black";
    }
  }
};
//function to change color on red or black

//pseudocode
// crear html basico
// crear dos arrays
// crear funcion random variables
// crear el boton para imprimir
