/*
 * Create a list that holds all of your cards
 */
const cards = [ 'fa-diamond', 'fa-diamond'
                'fa-paper-plane-o', 'fa-paper-plane-o'
                'fa-anchor', 'fa-anchor'
                'fa-bolt', 'fa-bolt'
                'fa-leaf', 'fa-leaf'
                'fa-bicycle', 'fa-bicycle'
                'fa-bomb', 'fa-bomb'
                'fa-cube', 'fa-cube'
];

function generateCard(card) {
    return `<li class="card" data-card "${card}><i class='fa ${card}'></i></li>`; 
}
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


 /* 
  * 1. Assign cards with icon
  * 2. click 2 cards
  * 3. flip cards
  * 4. flip back if no match
  * 5. stay flipped if cards match
  * 6. when all cards have matched game won
  * 7. add timer to game
  * 8. add stars scoring system
  * 9. add restart button to play again
  * 10 add congratulations pop up when player wins
*/

function initGame() {
    const deck = document.querySelector('.deck');

    const cardHTML = shuffle(cards).map(function(card) {
        return generateCard(card);
    });
    moves = 0;
    moveCounter.innerText = moves;

    deck.innerText = cardHTML.join('');
}

initGame();


const allCards = document.querySelectorAll('.card');
const openCards = [];
//matching cards
allCards.forEach(function(card) {
 card.addEventListener('click', function(e) {

     if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')) {
         openCards.push(card);
         card.classList.add('open', 'show');
        
     if (openCards.length == 2) {    
        if (openCards[0].dataset.card == openCards [1].datasetcard) {
            openCards[0].classList.add('match');
            openCards[0].classList.add('open');
            openCards[0].classList.add('show');

            openCards[1].classList.add('match');
            openCards[1].classList.add('open');
            openCards[1].classList.add('show');
        
            openCards = [];
        } else {
            //if no match, hide
            setTimeout(function() {
                    openCards.forEach(function(card) {
                        card.classList.remove('open', 'show');
                    });
                    openCards = [];
                }, 1000);
            }
            //moves counter
            moves +- 1;
            moveCounter.innerText = moves;
        }
        // star rating

        //congratulations pop-up

        //restart game
       const timer = new Timer();
        restart.addEventListener("click", () => {
        restartGame();
       
    }
});
});


