/* eslint-disable */
import "bootstrap";
import "./style.css";

const suits = ["♥", "♦", "♠", "♣"];
const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

window.onload = function() {
  //write your code here
  generateCard();

  // function random
  function generateCard() {
    let suit = Math.floor(Math.random() * suits.length);
    let card = Math.floor(Math.random() * cards.length);

    document.getElementById("randomCard").innerHTML = card;
    document.getElementById("suitCard").innerHTML = randomSuit;

    //converting the random number to string
    let randomSuit = suits[suit];

    //Change colours to red or blank depends of the nipe
    if (randomSuit === "♥" || randomSuit === "♦") {
      document.querySelector("#suitCard").style.color = "red";
    } else if (randomSuit === "♠" || randomSuit === "♣") {
      document.querySelector("#suitCard").style.color = "black";
    }
  }
};

//pseudocode
// crear html basico
// crear dos arrays
// crear funcion random variables
// crear el boton para imprimir
