var twoClubs = new Object();
twoClubs.value = 2;
twoClubs.color = "Black"
twoClubs.name = "Two of Clubs"

var eightDiamond = new Object();
eightDiamond.value = 8;
eightDiamond.color = "Red"
eightDiamond.name = "Eight of Diamonds"

var jackSpade = new Object();
jackSpade.value = 11;
jackSpade.color = "Black"
jackSpade.name = "Jack of Spades"

var threeHeart = new Object();
threeHeart.value = 3;
threeHeart.color = "Red"
threeHeart.name = "Three of Hearts"

var sevenClub = new Object();
sevenClub.value = 7;
sevenClub.color = "Black"
sevenClub.name = "Seven of Clubs"

var fourSpade = new Object();
fourSpade.value = 4;
fourSpade.color = "Black"
fourSpade.name = "Four of Spades"

var kingDiamond = new Object();
kingDiamond.value = 13;
kingDiamond.color = "Red"
kingDiamond.name = "King of Diamonds"

var tenHeart = new Object();
tenHeart.value = 10;
tenHeart.color = "Red"
tenHeart.name = "Ten of Hearts"

function PickCard() {
	var cards = [twoClubs, eightDiamond, jackSpade, threeHeart, sevenClub, fourSpade, kingDiamond, tenHeart]

	const theCard = cards[Math.floor(Math.random() * cards.length)]

	return theCard;
}

var card = PickCard();

document.getElementById("RBButton").addEventListener("click", function(){
    alert(card.color)
});

document.getElementById("HLButton").addEventListener("click", function(){
    if (card.value >= 8) {
    	alert("High")
    }
    else{
    	alert("Low")
    }
});

document.getElementById("OEButton").addEventListener("click", function(){
    if (card.value % 2 == 0) {
    	alert("Even")
    }
    else{
    	alert("Odd")
    }
});

document.getElementById("guessButton").addEventListener("click", function(){
   var answer = document.getElementById("theGuess").value;

   if (answer.toUpperCase() == card.name.toUpperCase()) {
   	alert("You nailed it! It was the " + card.name)
   }
   else{
   	alert("Try again")
   }
});
