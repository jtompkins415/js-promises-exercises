let baseURL = "https://deckofcardsapi.com/api/deck/"

class CardDeck {
    
    constructor(id) {
        this.id = id
    };

    async getDeck(){
    let deckData = await $.getJSON(`${baseURL}/new/shuffle`)
    console.log(deckData)
    this.deck_id = deckData.deck_id
    this.remaining = deckData.remaining 
    }
    
    async drawCard (){
        let res = await $.getJSON(`${baseURL}/${this.deck_id}/draw/?count=1`)
        console.log(res)
        return res
        
    }

    async drawMultipleCards(){
        let res = await Promise.all([
            axios.get(`${baseURL}/${this.deck_id}/draw/?count=1`),
            axios.get(`${baseURL}/${this.deck_id}/draw/?count=1`)
        ])

        console.log(`${res[0].data.cards[0].value} of ${res[0].data.cards[0].suit}`)
        console.log(`${res[1].data.cards[0].value} of ${res[1].data.cards[0].suit}`)
    }
}

//DRAW CARDS APP: My Soltion
let newDeck = new CardDeck()
let $button = $('#card-button')
let $deckBase = $('.deck-base')

newDeck.getDeck()

$button.on('click', () => {
    let newCard = newDeck.drawCard()
    let cardImg = newCard.cards[0].image;

    $deckBase.append($('<img>', {
        src: cardImg,
    }))

    if (newDeck.remaining === 0) $button.remove();
})

//Springboard Soltion
// async function setup() {
//     let $btn = $('button');
//     let $cardArea = $('.deck-base');

//     let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
//     $btn.show().on('click', async function() {
//       let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/?count=1`);
//       let cardSrc = cardData.cards[0].image;
//       $cardArea.append(
//         $('<img>', {
//           src: cardSrc,
//         }))
//         if (cardData.remaining === 0) $btn.remove();
//     })
// }
// setup()

