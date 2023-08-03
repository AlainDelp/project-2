let randomNumber; 
let attempts; 
let isGameActive; 
let timerId;
let score; 
let timeRemaining;
let difficulty; 

function startGame() {
  
  difficulty = parseInt(document.getElementById('difficulty').value);

  
  switch (difficulty) {
    case 1: 
      timeRemaining = 60;
      break;
    case 2: 
      timeRemaining = 45;
      break;
    case 3: 
      timeRemaining = 30;
      break;
  }


  randomNumber = generateRandomNumber();

  
  attempts = 0;
  isGameActive = true;
  score = 0;

  
  document.getElementById('guessInput').disabled = false;
  document.getElementById('guessButton').disabled = false;
  document.getElementById('hintButton').disabled = false;

 
  document.getElementById('feedback').textContent = '';

  
  startTimer();

  
  document.getElementById('guessInput').focus();
}

function generateRandomNumber() {
 
  return Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
    if (!isGameActive) {
        return;
      }
    
      
      const userGuess = parseInt(document.getElementById('guessInput').value);
    
      
      const feedback = document.getElementById('feedback');
    
     
      attempts++;
 
  if (userGuess === randomNumber) {
   
    switch (difficulty) {
      case 1: 
        score += 10;
        break;
      case 2: 
        score += 20;
        break;
      case 3: 
        score += 30;
        break;
    }

    
    feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts. Your score: ${score}`;
    feedback.style.color = 'green';
    endGame();
  } else if (userGuess < randomNumber) {
  
    feedback.textContent = 'Too low! Try again.';
    feedback.style.color = 'red';
  } else {
 
    feedback.textContent = 'Too high! Try again.';
    feedback.style.color = 'red';
  }
}

function provideHint() {
  const randomNum1 = generateRandomNumber();
  const randomNum2 = generateRandomNumber();

  
  const hintArray = [randomNumber, randomNum1, randomNum2];

  return hintArray;
}

function startTimer() {
  
  document.getElementById('timer').textContent = `Time remaining: ${timeRemaining}s`;

  
  timerId = setInterval(() => {
    timeRemaining--;
    document.getElementById('timer').textContent = `Time remaining: ${timeRemaining}s`;

    if (timeRemaining === 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {

  document.getElementById('guessInput').disabled = true;
  document.getElementById('guessButton').disabled = true;
  document.getElementById('hintButton').disabled = true;

  
  clearInterval(timerId);


  isGameActive = false;
}

function resetGame() {
  
  document.getElementById('guessInput').value = '';

  
  document.getElementById('feedback').textContent = '';

  
  clearInterval(timerId);
  document.getElementById('timer').textContent = '';

  document.getElementById('guessInput').disabled = false;
  document.getElementById('guessButton').disabled = false;
  document.getElementById('hintButton').disabled = false;

  isGameActive = true;
}

document.getElementById('guessButton').addEventListener('click', checkGuess);


document.getElementById('guessInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    checkGuess();
  }
});

document.getElementById('hintButton').addEventListener('click', provideHint);


document.getElementById('resetButton').addEventListener('click', resetGame);

document.getElementById('difficulty').addEventListener('change', startGame);

startGame();