let baseURL = "https://deckofcardsapi.com/api/deck/"

let newDeck = new Promise((resolve, reject) => {
    resolve(resp = axios.get(`${baseURL}/z0x36h12iml5/draw/?count=1`))
    reject("NO GO AMIGO!")
})

newDeck
.then(resp => console.log(`${resp.data.cards[0].value} of ${resp.data.cards[0].suit}`))

let shuffledDeck = new Promise((resolve, reject) => {
    resolve(resp = axios.get(`${baseURL}/new/shuffle/`))
    reject("NO GO AMIGO!")
})

shuffledDeck
.then(resp => {
    console.log(resp.data)
    return axios.get(`${baseURL}/3zroy7xdkoub/draw/?count=1`)
})
.then(resp2 => {
    console.log(`${resp2.data.cards[0].value} of ${resp2.data.cards[0].suit}`)
    return axios.get(`${baseURL}/3zroy7xdkoub/draw/?count=1`)
})
.then(resp3 => {
    console.log(`${resp3.data.cards[0].value} of ${resp3.data.cards[0].suit}`)
})

//DRAW CARDS APP

let deckId = null;
let $button = $("#card-button");
let $deckBase = $('.deck-base');


$.getJSON(`${baseURL}/new/shuffle`).then(data => {deckId = data.deck_id;
$button.show()
});


$button.on('click', () => {
    $.getJSON(`${baseURL}/${deckId}/draw/`).then(data => {
        let cardImg = data.cards[0].image;
        $deckBase.append($('<img>', {
            src: cardImg,
        })
        );
        if (data.remaining === 0) $button.remove();
    });
});

