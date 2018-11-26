const global = {}

global.rock = document.getElementById('rock');
global.paper = document.getElementById('paper');
global.scissors = document.getElementById('scissors');
global.playerScore = document.getElementById('player-score');
global.opponentScore = document.getElementById('opponent-score');
global.opponentChoice = document.getElementById('opponent-choice');

const w = "win";
const l = "lose";
const d = "draw";

let playerScore = 0;
let opponentScore = 0;

global.resultEngine = [ [1,l,d], [w,1,d], [w,l,1] ]

document.addEventListener('DOMContentLoaded', () => {

  global.rock.addEventListener('click', clickRock)
  global.paper.addEventListener('click', clickPaper)
  global.scissors.addEventListener('click', clickScissors)

  function clickRock() {
    let opponentChoice = getOpponentChoice();
    getResult(0, opponentChoice);
  }

  function clickPaper() {
    let opponentChoice = getOpponentChoice();
    getResult(1, opponentChoice);
  }

  function clickScissors() {
    let opponentChoice = getOpponentChoice();
    getResult(2, opponentChoice);
  }

  function getResult(playerChoice, opponentChoice) {
    let result = global.resultEngine[opponentChoice][playerChoice];
    if (result === "win") {
      playerScore += 1;
    } else if (result === "lose") {
      opponentScore += 1;
    } else {}
  }

  function getOpponentChoice() {
    let choice = Math.floor(Math.random() * 3);
      global.opponentChoice.innerHtml = ""
      global.opponentChoice.classList.add('far');
      if (choice === 0) {      
        global.opponentChoice.classList.add('fa-hand-rock');
      } else if (choice === 1) {      
        global.opponentChoice.classList.add('fa-hand-paper');
      } else {
        global.opponentChoice.classList.add('fa-hand-scissors');
      }
      return choice;
  }
})