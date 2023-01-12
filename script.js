const cards = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"
];

let NumberOfCard;

const DeckOfCards = [];

function AnalyzerOfAttempts() { 
	return Math.random() - 0.5; 
}

// create the cards layout

function DistributeCards(){

    const gameboard = document.querySelector('.gameboard');

    for(let i = 0; i < DeckOfCards.length; i++){
        let CardsVisuals = `
            <li class="card" onclick="TurnCard(this)">
                <div class='front-face face'>
                    <img src='img/bird.png'>
                </div>
                <div class='back-face face'>
                    <img src='img/${DeckOfCards[i]}.gif'>
                </div>
            </li>  
        `;

        gameboard.innerHTML += CardsVisuals;
    }
}


// put cards on gameboard

function Start(){

    for(let i = 0; i < (NumberOfCard/2) ; i++ ){
        let card = cards[i];
        DeckOfCards.push(card);
        DeckOfCards.push(card);
    }


    DeckOfCards.sort(AnalyzerOfAttempts);

   
    DistributeCards()
}

function WrongNumberOfCard(){
    if ( (NumberOfCard % 2 !== 0) || NumberOfCard < 4 || NumberOfCard > 14 || isNaN(NumberOfCard)) {
        return true;
    }else{
        return false;
    }
}

// ask number of cards

function ChooseNumberOfCard(){

    NumberOfCard = Number( prompt('Com quantas cartas você quer jogar?') );
    //qtdeCartas = 4;

    while( WrongNumberOfCard() ){
        NumberOfCard = Number( prompt('Com quantas cartas você quer jogar?') );
    }

    Start();

}
ChooseNumberOfCard();



// //











