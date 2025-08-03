// Calculator
let calculation = localStorage.getItem('calculation') || '';
function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  localStorage.setItem('calculation', calculation);
}

// Rock Paper Scissors Game with Score Storage
let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else {
      result = 'You lose.';
    }

  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}
function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber < 1/3) {
    return 'rock';
  } else if (randomNumber < 2/3) {
    return 'paper';
  } else {
    return 'scissors';
  }
}
function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  console.log('Score reset!');
}

// Cart Quantity
let cartQuantity = 0;
function updateCartQuantity(change) {
  if (cartQuantity + change > 10) {
    alert('The cart is full');
    return;
  }
  if (cartQuantity + change < 0) {
    alert('Not enough items in the cart');
    return;
  }
  cartQuantity += change;
  console.log(`Cart quantity: ${cartQuantity}`);
}
function resetCart() {
  cartQuantity = 0;
  console.log('Cart was reset.');
  console.log(`Cart quantity: ${cartQuantity}`);
}

// YouTube Subscribe Button & Amazon Shipping
function subscribe() {
  const buttonElement = document.getElementById('subscribe-button');
  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-subscribed');
  } else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
}

function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.getElementById('cost-input');
  let cost = Number(inputElement.value);
  if (cost < 40) {
    cost += 10;
  }
  document.getElementById('total-cost').innerHTML = `$${cost}`;
}
