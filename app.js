const cardArray = [
    {
        name: 'owl',
        img: 'images/owl.jpg'
    },
    {
        name: 'lion',
        img: 'images/lion.jpg'
    },
    {
        name: 'mouse',
        img: 'images/mouse.jpg'
    },
    {
        name: 'fox',
        img: 'images/fox.jpg'
    },
    {
        name: 'cat',
        img: 'images/cat.jpg'
    },
    {
        name: 'bird',
        img: 'images/bird.jpg'
    },
    {
        name: 'owl',
        img: 'images/owl.jpg'
    },
    {
        name: 'lion',
        img: 'images/lion.jpg'
    },
    {
        name: 'mouse',
        img: 'images/mouse.jpg'
    },
    {
        name: 'fox',
        img: 'images/fox.jpg'
    },
    {
        name: 'cat',
        img: 'images/cat.jpg'
    },
    {
        name: 'bird',
        img: 'images/bird.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('#grid');
const score = document.querySelector('#score');
const moves = document.querySelector('#moves');
const cardsChosen = [];
const cardsChosenId = [];
const cardsCollected = [];
let movesCount = 0;

function clearArray(arr) {
    while(arr.length > 0) {
        arr.pop();
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const cardOne = cardsChosenId[0];
    const cardTwo = cardsChosenId[1];

    if(cardsChosen[0] == cardsChosen[1]){
        cards[cardOne].setAttribute('src', 'images/found.jpg');
        cards[cardOne].removeEventListener('click', flipCard);
        cards[cardTwo].setAttribute('src', 'images/found.jpg');
        cards[cardTwo].removeEventListener('click', flipCard);

        cardsCollected.push(...cardsChosen);
        console.log(cardsCollected);
    } else {
        cards[cardOne].setAttribute('src', 'images/blank.jpg');
        cards[cardTwo].setAttribute('src', 'images/blank.jpg');
    }

    score.textContent = cardsCollected.length/2;

    clearArray(cardsChosen);
    clearArray(cardsChosenId);

    if(cardsCollected.length == 12) {
        score.textContent = 'Congratulations! You found them all!';
        setTimeout( gameReset, 4000);
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    if(cardsChosen.length<2 && cardsChosenId[0] != cardId){
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkMatch, 1000);
        }
        movesCount = movesCount + 1;
        moves.textContent = parseInt(movesCount/2);
    }
}


const createBoard = () => {
    for(let i=0; i<cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        grid.append(card);
    }
}

function gameReset() {
    grid.innerHTML = "";
    score.innerHTML = "0";
    moves.innerHTML = "0";
    movesCount = 0;
    cardArray.sort(() => 0.5 - Math.random());
    createBoard();
    console.log('new game', grid);
    clearArray(cardsChosen);
    clearArray(cardsChosenId);
    clearArray(cardsCollected);

}

createBoard();
score.innerHTML = "0";
moves.innerHTML = "0";

const reset = document.querySelector('#reset');

reset.addEventListener('click', gameReset );



