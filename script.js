let FirstCard, SecondCard;

let PlayAttempts = 0;

let Successful = 0;

let TimeInterval;

let TheTimer = 0;

function WrongCombination(){
    FirstCard = undefined;
    SecondCard = undefined;
}

function TurnBackCards(){
    FirstCard.classList.remove('turned');
    SecondCard.classList.remove('turned');
     WrongCombination();
}

// player can choose to play one more time

function End(){
    if (Successful === DeckOfCards.length){
        clearInterval( TimeInterval );
        alert(`Jogo Finalizado com ${PlayAttempts} jogas em ${TheTimer} segundos`);
        const OneMoreTime = confirm("Gostaria de jogar novamente?");
        if (OneMoreTime === true){
            window.location.reload(); 
        }
    }
}

// Flip cards with click and analyze if they match

function TurnCard(card){
    if ( card.classList.contains('turned')){
        return;
    }
    if ( FirstCard !== undefined && SecondCard !== undefined ){
        return;
    }
        card.classList.add('turned');
        PlayAttempts++;
        if (FirstCard === undefined ){
            FirstCard = card;
        }else{
            if (SecondCard === undefined){
                SecondCard = card;
                console.log(typeof(FirstCard));
                console.log(typeof(SecondCard.innerHTML));
                if ( FirstCard.innerHTML === SecondCard.innerHTML){
                    console.log('RIGHT CHOICE');
                    WrongCombination();
                    Successful += 2;
                    End();
                }else{
                    console.log('WRONG CHOICE');
                    setTimeout(TurnBackCards, 1500);                  
                }
            }
        }
        console.log(FirstCard);
        console.log(SecondCard);
}



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
    while( WrongNumberOfCard() ){
        NumberOfCard = Number( prompt('Com quantas cartas você quer jogar?') );
    }
    Start();
    TimeInterval = setInterval( clock, 1000);
}
ChooseNumberOfCard();






































