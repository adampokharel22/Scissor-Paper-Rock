function playGame(userChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    var result = '';
  
    if (userChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = 'You win!';
    } else {
      result = 'You lose!';
    }
  
    document.getElementById('result').innerText = result;
  }
