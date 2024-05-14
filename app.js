const moves = document.querySelector('.moves-count');
const timeValue = document.querySelector('.time');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const gameContainer = document.querySelector('.game-container');
const result = document.querySelector('.result');
const controls = document.querySelector('.controls-container');

let cards, interval;
let firtCard = false;
let secondCard = false;


// items array

const items = [ 
    {
       name: "bee",
       image: "src/images/bee.png"
    },
    {
        name: "crocodile",
        image: "src/images/crocodile.png"
     },
     {
        name: "macaw",
        image: "src/images/macaw.png"
     },
     {
        name: "gorilla",
        image: "src/images/gorilla.png"
     },
     {
        name: "tiger",
        image: "src/images/tiger.png"
     },
     {
        name: "monkey",
        image: "src/images/monkey.png"
     },
     {
        name: "chameleon",
        image: "src/images/chameleon.png"
     },
     {
        name: "piranha",
        image: "src/images/piranha.png"
     },
     {
        name: "anaconda",
        image: "src/images/anaconda.png"
     },
     {
        name: "sloth",
        image: "src/images/sloth.png"
     },
     {
        name: "cockatoo",
        image: "src/images/cockatoo.png"
     },
     {
        name: "toucan",
        image: "src/images/toucan.png"
     },
]
