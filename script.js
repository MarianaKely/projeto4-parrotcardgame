// ask number of cards

function ChooseNumberOfCard(){

    NumberOfCard = Number( prompt('Com quantas cartas você quer jogar?') );

    while( WrongNumberOfCard() ){
        NumberOfCard = Number( prompt('Com quantas cartas você quer jogar?') );
    }

  
}
ChooseNumberOfCard();