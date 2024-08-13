console.log("Welcome to Tic Tac Toe game!!")
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let isGameOver = false;

let turn = "X";

//Change the turn to next player
const changeTurn = () => {
    return turn === "X"? "O" : "X";
}

//check winner function
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, -3, 5, 0],
        [3, 4, 5, -3, 15, 0],
        [6, 7, 8, -3, 25, 0],
        [0, 3, 6, -12.5, 15, 90],
        [1, 4, 7, -2.5, 15, 90],
        [2, 5, 8, 7.5, 15, 90],
        [0, 4, 8, -3, 14.5, 45],
        [2, 4, 6, -3, 15.5, -45],
    ];

    wins.forEach(e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) 
            && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) 
            && (boxtexts[e[0]].innerText!== '')) {
                document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won!!";
                isGameOver = true;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
                document.querySelector(".line").style.width = "35vw";
                document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            }
    });
}

//Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameOver) {
                document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
            }
        }
    })
});

//On click event to reset the board.
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });

    turn = "X";
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector(".line").style.width = "0";
});