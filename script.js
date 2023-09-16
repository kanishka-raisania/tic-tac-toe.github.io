console.log("Welcome to Tic Tac Toe!")
document.addEventListener("DOMContentLoaded",() =>{
let turnmusic= new Audio("ting.wav")
let turn = "X"
let gameover= false
let totalMoves=0;
const maxMoves=9;
let winMusic= new Audio("Victory.mp3")

// Function to change the turn
const changeTurn= () =>{
    return turn=== "X" ? "O" : "X"
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
      [0, 1, 2, 0, 5, 0],
      [3, 4, 5, 0, 15, 0],
      [6, 7, 8, 0, 25, 0],
      [0, 3, 6, -10, 15, 90],
      [1, 4, 7, 0, 15, 90],
      [2, 5, 8, 10, 15, 90],
      [0, 4, 8, 0, 15, 45],
      [2, 4, 6, 0, 15, 135],
    ];
  
    let winner = "";
  
    wins.forEach((e) => {
      if (
        boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
        boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
        boxtext[e[0]].innerText !== ""
      ) {
        winner = boxtext[e[0]].innerText;
        gameover = true;
        document.querySelector(".line").style.width = "30vw";
        document.querySelector(
          ".line"
        ).style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        // document.getElementById("giff").src = "yayyy.gif";
        // document.getElementById("giff").style.width = "250px";
      }
    });
  
    if (!gameover) {
      let draw = true;
      Array.from(boxtext).forEach((box) => {
        if (box.innerText === "") {
          draw = false;
        }
      });
  
      if (draw) {
        document.querySelector(".game-info").innerHTML = "It's a Tie!";
        document.getElementById("giff").style.width = "250px";
        document.getElementById("giff").src = "draw.gif";
        drawMusic.play();
        gameover = true;
      }
    }
  
    if (winner) {
      document.querySelector(".game-info").innerHTML = winner + " Won";
      document.getElementById("giff").src = "yayyy.gif";
        document.getElementById("giff").style.width = "250px";
      winMusic.play();
    }
  };
  


// Game Logic
let boxes = document.getElementsByClassName("box");maxMoves
Array.from(boxes).forEach(element =>{
    let boxtext= element.querySelector(".boxtext");
    element.addEventListener('click', ()=>{
        if (gameover) return;
        if(boxtext.innerHTML=== ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnmusic.play();
            totalMoves++;
            checkWin();
            if (totalMoves === maxMoves) {
                document.querySelector(".game-info").innerHTML = "It's a Tie!";
                gameover = true;
              } else {
                checkWin();
                if (!gameover) {
                  document.getElementsByClassName("game-info")[0].innerText =
                    "Turn for " + turn;
                }
              }
        }
    })
})

//setting the reset button
let reset = document.querySelector('.reset');
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText= ""
    });
    turn= "X";
    gameover= false;
    let gameInfo = document.getElementsByClassName('game-info')[0];
    if (gameInfo) {
         gameInfo.innerText = 'Turn for ' + turn;
    }
    document.querySelector(".line").style.width=  '0vw';
    document.getElementById("giff").src = "welcome.gif";
    document.getElementById("giff").style.width = "400px";
})


}) 
 
