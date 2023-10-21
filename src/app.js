/* eslint-disable */
import "bootstrap";
import "./style.css";

const suits = ["♥", "♦", "♠", "♣"];
const cards = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

the time to reload the page every 10secs
window.setTimeout(function() {
window.location.reload();
}, 10000);

window.changeSize = function() {
  let ancho = document.querySelector("#ancho").value;
  let alto = document.querySelector("#alto").value;

  document.querySelector(".naipe_change").style.width = ancho + "px";
  document.querySelector(".naipe_change").style.height = `${alto}px`;
};

window.onload = function() {
  //window function to button -> onclick reload the page

  window.buttonCard = function() {
    //write your code here

    generateCard();

    //styles of suits
    // function random
    function generateCard() {
      let suit = Math.floor(Math.random() * suits.length);
      let card = Math.floor(Math.random() * cards.length);

      //converting the random number to string
      let randomSuit = suits[suit];

      document.getElementById("randomCard").innerHTML = card;
      document.querySelector(".naipe1").innerHTML = randomSuit;
      document.querySelector(".naipe2").innerHTML = randomSuit;

      //Change colours to red or blank depends of the nipe
      if (randomSuit === "♥" || randomSuit === "♦") {
        document.querySelector("#container").style.color = "red";
      } else if (randomSuit === "♠" || randomSuit === "♣") {
        document.querySelector("#container").style.color = "black";
      }
    }
  };
  window.buttonCard();
};

//document.querySelector('#height').value =
//pseudocode
// crear html basico
// crear dos arrays
// crear funcion random variables
// crear el boton para imprimir
