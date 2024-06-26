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
];

//Initial Time

let seconds = 0,
    minutes = 0;

// Initial moves and win count

let movesCount = 0,
    winCount = 0;

//Tiempo

const timeGenerator = () =>{
    seconds += 1;

    // minutes logic
    if(seconds >= 60){
        minutes += 1;
        seconds = 0;
    }
    
    //format time before displaying
    
    let secondsValues = seconds < 10 ? `0${seconds}`: seconds;
    let minutesValues = minutes < 10 ? `0${minutes}`: minutes;
    
    timeValue.innerHTML = `<span>Time: </span> ${minutesValues}:${secondsValues}`;
}

// For calculating moves

const movesCounter = ()=> {
   movesCount += 1;
   moves.innerHTML = `<span>Moves:</span> ${movesCount}`;
}

// Pick random objects from the items array

const generateRandom = (size = 4)=>{
  //temporary array
  let tempArray = [...items];
  //initializes cardValues array
  let cardValues = [];
  //size should be double (4x4 matrix)/2 since pairs of objects would exist
  size = (size * size) / 2;

  //Ramdon Object selection
  for(let i = 0; i < size; i++){
    const ramdonIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray);
  }
 }




