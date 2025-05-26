# calculator
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Simple Calculator</title>
  <link rel="stylesheet" href="./Calulater.css" />
</head>
<body>
    <script src="Calulater.js"></script>
  <div class="calculator">
    <input type="text" id="display" readonly />
    <div class="buttons">
      <button onclick="clearDisplay()">C</button>
      <button onclick="appendToDisplay('7')">7</button>
      <button onclick="appendToDisplay('8')">8</button>
      <button onclick="appendToDisplay('9')">9</button>
      <button onclick="appendToDisplay('/')">/</button>
      <button onclick="appendToDisplay('4')">4</button>
      <button onclick="appendToDisplay('5')">5</button>
      <button onclick="appendToDisplay('6')">6</button>
      <button onclick="appendToDisplay('*')">*</button>
      <button onclick="appendToDisplay('1')">1</button>
      <button onclick="appendToDisplay('2')">2</button>
      <button onclick="appendToDisplay('3')">3</button>
      <button onclick="appendToDisplay('-')">-</button>
      <button onclick="appendToDisplay('0')">0</button>
      <button onclick="appendToDisplay('.')">.</button>
      <button onclick="calculateResult()">=</button>
      <button onclick="appendToDisplay('+')">+</button>
      <button onclick="appendToDisplay('%')">%</button>
      <button onclick="appendToDisplay('x')">x</button>
    </div>
  </div>
</body>
</html>

body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
  }
  
  .calculator {
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    background-color: white;
  }
  
  #display {
    width: 100%;
    height: 40px;
    margin-bottom: 30px;
    text-align: right;
    padding: 8px;
    font-size: 18px;
    border-radius: 10px;
    border: 1px solid #ccc;
  }
  
  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 60px);
    gap: 10px;
  }
  
  button {
    height: 50px;
    font-size: 25px;
    border: none;
    border-radius:10%;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  button:hover {
    background-color: #bd2828;
  }

  function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function calculateResult() {
    const display = document.getElementById("display");
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  }  
