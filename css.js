<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Manı'nin Web App'i</title>
  <style>
    body {
      font-family: sans-serif;
      background-color: #f9f9f9;
      padding: 20px;
      line-height: 1.6;
    }

    h2 {
      color: #333;
    }

    .section {
      margin-bottom: 30px;
      border: 1px solid #ccc;
      padding: 15px;
      border-radius: 10px;
      background: #fff;
    }

    button {
      padding: 10px 15px;
      margin: 5px;
      font-size: 14px;
      border: none;
      border-radius: 5px;
      background-color: #008cff;
      color: white;
      cursor: pointer;
    }

    button:hover {
      background-color: #005ea6;
    }

    input {
      padding: 10px;
      font-size: 16px;
      margin-top: 10px;
    }

    .is-subscribed {
      background-color: #ccc;
      color: black;
    }
  </style>
</head>
<body>

  <div class="section">
    <h2>Calculator</h2>
    <button onclick="updateCalculation('1')">1</button>
    <button onclick="updateCalculation('+')">+</button>
    <button onclick="updateCalculation('2')">2</button>
    <button onclick="updateCalculation('=')">=</button>
  </div>

  <div class="section">
    <h2>Rock Paper Scissors</h2>
    <button onclick="playGame('rock')">Rock</button>
    <button onclick="playGame('paper')">Paper</button>
    <button onclick="playGame('scissors')">Scissors</button>
    <br>
    <button onclick="resetScore()">Reset Score</button>
  </div>

  <div class="section">
    <h2>Cart Quantity</h2>
    <button onclick="updateCartQuantity(1)">Add to Cart</button>
    <button onclick="updateCartQuantity(-1)">Remove</button>
    <button onclick="resetCart()">Reset Cart</button>
  </div>

  <div class="section">
    <h2>YouTube Subscribe Button</h2>
    <button id="subscribe-button" onclick="subscribe()">Subscribe</button>
  </div>

  <div class="section">
    <h2>Amazon Shipping Calculator</h2>
    <input id="cost-input" placeholder="Enter cost" onkeydown="handleCostKeydown(event)">
    <button onclick="calculateTotal()">Calculate</button>
    <p id="total-cost">$0</p>
  </div>

  <script>
    // Calculator
    let calculation = localStorage.getItem('calculation') || '';
    function updateCalculation(value) {
      calculation += value;
      console.log(calculation);
      localStorage.setItem('calculation', calculation);
    }

    // Rock Paper Scissors
    let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
    function playGame(playerMove) {
      const computerMove = pickComputerMove();
      let result = '';

      if (playerMove === 'scissors') {
        if (computerMove === 'rock') result = 'You lose.';
        else if (computerMove === 'paper') result = 'You win.';
        else result = 'Tie.';
      } else if (playerMove === 'paper') {
        if (computerMove === 'rock') result = 'You win.';
        else if (computerMove === 'paper') result = 'Tie.';
        else result = 'You lose.';
      } else if (playerMove === 'rock') {
        if (computerMove === 'rock') result = 'Tie.';
        else if (computerMove === 'paper') result = 'You lose.';
        else result = 'You win.';
      }

      if (result === 'You win.') score.wins += 1;
      else if (result === 'You lose.') score.losses += 1;
      else score.ties += 1;

      localStorage.setItem('score', JSON.stringify(score));

      alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
    }

    function pickComputerMove() {
      const randomNumber = Math.random();
      if (randomNumber < 1/3) return 'rock';
      else if (randomNumber < 2/3) return 'paper';
      else return 'scissors';
    }

    function resetScore() {
      score = { wins: 0, losses: 0, ties: 0 };
      localStorage.removeItem('score');
      console.log('Score reset!');
    }

    // Cart
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

    // Subscribe
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

    // Shipping
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
  </script>

</body>
</html>
