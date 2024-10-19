// function play(){
// //Step - 1 : Hide the home screeen
// const homesection = document.getElementById('home_screen')
// homesection.classList.add('hidden')
// // console.log(homesection)


// // Step -2 : show the play geound

// const playgroundSection = document.getElementById('play_ground')

// playgroundSection.classList.remove('hidden')


// }



function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('Player pressed', playerPressed);

//stop game if press Esc--->
if(playerPressed === 'Escape'){
    gameOver();
}

    //get the expected press---->
    const currentAlphabetElement = document.getElementById('current_alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    // console.log(playerPressed, expectedAlphabet);

// check matched or not-->
if(playerPressed === expectedAlphabet){
    console.log('you get a point');
 
// update a new score
// 1. get the current score
// const currentScoreElement = document.getElementById('current_score');
// const currentScoreText = currentScoreElement.innerText;
// const  currentScore = parseInt(currentScoreText);
// console.log(currentScore);
// // 2. Incrasse the score by 1
// const newScore = currentScore +  1;
// // 3. show the update dscore
// currentScoreElement.innerText = newScore;

//------------------------------------------------

const currentScore = getTextElementValueById('current_score');

const updateScore = currentScore +  1;
setTextElementValueById('current_score', updateScore);




    // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();

}
else{
    console.log('you miss a life');
    // step-1 : get the current life number
// const currentLifeElement = document.getElementById('current_life');
// const currentLifrText = currentLifeElement.innerText;
// const currentLife = parseInt(currentLifrText);
//     // step-2 : redious the life  count
// const newLife = currentLife - 1;
//     // step-3 : display the update life
//     currentLifeElement.innerText = newLife;


//---------------------------------------------

const currentLife = getTextElementValueById('current_life');
const updatedLife = currentLife - 1;
setTextElementValueById('current_life', updatedLife);

if(updatedLife === 0){
    gameOver();
}

}

}

//capture keyboard keypress--->
document.addEventListener('keyup',handleKeyboardButtonPress);





function continueGame(){
const alphabet = getARandomAlphabet();
// console.log('your random alphabet', alphabet);

//set random alphabet  to the screen

const currentAlphabetElement = document.getElementById('current_alphabet');
currentAlphabetElement.innerText = alphabet;


// Set bg color---->
setBackgroundColorById(alphabet);

}

function play(){
    hidenElementById('home_screen');
    hidenElementById('final_score');
    showElementById('play_ground');
    // reset score and life-->
    setTextElementValueById('current_life', 5);
    setTextElementValueById('current_score', 0);
    continueGame();
}

function gameOver(){
    hidenElementById('play_ground');
    showElementById('final_score');
    //update final score
    const lastScore = getTextElementValueById('current_score');
    console.log(lastScore);
    setTextElementValueById('last_score', lastScore);

    //cleat last selected hiligght-->
    const currentAlphabet = getElementTextById('current_alphabet');
    removeBackgroundColorById(currentAlphabet);
}