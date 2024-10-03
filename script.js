const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('your-choice');
const Choose = document.querySelectorAll('button');
const resultDisplay = document.getElementById('verdict');
let currChoice
/* let randomNum */
let machineChoice

Choose.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    currChoice = e.target.id;
    userChoice.innerHTML = "Your Choice : "+ currChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice(){
  const  randomNum = Math.floor(Math.random() * 3) ;
        const col = ["rock", "paper","scissors"];
        machineChoice = col[randomNum]
    computerChoice.innerHTML = "Computer choice : " + machineChoice;
}

function getResult(){
      const results = {
            rock : {rock: "it's a draw", scissors : "you win!", paper: " you lost !"},
            paper : {paper : "It's a draw", scissors : "you win !", rock : " you lost! "},
            scissors : {scissors : "It's a draw", paper : "you win !", rock : "you loose!"}

      };
      resultDisplay.innerHTML = results[currChoice][machineChoice];
}

