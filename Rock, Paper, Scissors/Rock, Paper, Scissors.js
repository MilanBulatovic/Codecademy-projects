
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Not valid input');
  }
}

const getComputerChoice = () => {
  const number = Math.floor(Math.random() * 3)
  if(number === 0) {
    return `rock`
  } else if (number === 1){
    return `paper`
  } else {
    return `scissors`
  }
}

const determineWinner = (userChoice, computerChoice) => {
  //Tie case
  if(userChoice === computerChoice) {
    return `The game is tie`
  }
  //Other cases
  if( userChoice === 'rock' ) {
    if(computerChoice === 'paper'){
      return `Computer won!`
    } else {
      return `User won!`
    }
  }

  if( userChoice === 'paper'){
    if(computerCoice === 'scissors') {
      return `Computer won!`
    } else {
       return `User won!`
    }
  }

  if( userChoice === 'scissors'){
    if(computerCoice === 'rock') {
      return `Computer won!`
    } else {
       return `User won!`
    }
  }
  if( userChoice === 'bomb'){
      return `User won with DA BOMB!`
  }
}

function playGame() {
  const userChoice = getUserChoice('bomb')
  const computerChoice = getComputerChoice()
  console.log(determineWinner(userChoice, computerChoice));
}
playGame()

