
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

let cardOne = cards[0];
let cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("user flipped " + cardsInPlay);


if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You have found a match");
}
else {
	alert("sorry, try again");
}


 	
 