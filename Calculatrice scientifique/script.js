function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    let expression = document.getElementById('display').value;
  
    expression = expression.replace(/tanh/g, 'Math.tanh');
    expression = expression.replace(/cos/g, 'Math.cos');
    expression = expression.replace(/log/g, 'Math.log');
    expression = expression.replace(/sin/g, 'Math.sin');
    expression = expression.replace(/sqrt/g, 'Math.sqrt');
    expression = expression.replace(/pi/g, 'Math.PI');
  
    expression = expression.replace(/(\d+)!/g, function(match, p1) {
      return factorial(parseInt(p1));
    });
  
    try {
      let result = eval(expression);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////
 //                                            FONCTIONS AVANCEES                                    //
///////////////////////////////////////////////////////////////////////////////////////////////////////

let memory = 0;

function clearMemory() {
  memory = 0;
}

function addToMemory() {
  let currentValue = parseFloat(document.getElementById('display').value);
  memory += currentValue;
}

function subtractFromMemory() {
  let currentValue = parseFloat(document.getElementById('display').value);
  memory -= currentValue;
}

function recallMemory() {
  document.getElementById('display').value = memory;
}

// Autres fonctions
function toggleSign() {
  let currentValue = parseFloat(document.getElementById('display').value);
  document.getElementById('display').value = -currentValue;
}

function toggleSecond() {
}

function powerOfTwo() {
    let currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.pow(currentValue, 2);
  }
  
  function powerOfThree() {
    let currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.pow(currentValue, 3);
  }
  
  function powerOf() {
    let currentValue = parseFloat(document.getElementById('display').value);
    let exponent = parseFloat(prompt('Enter the exponent (y):'));
    document.getElementById('display').value = Math.pow(currentValue, exponent);
  }
  
  function exp() {
    let currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.exp(currentValue);
  }
  
  function powerOfTen() {
    let currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.pow(10, currentValue);
  }
  
  function reciprocal() {
    let currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = 1 / currentValue;
  }
  
  function squareRoot() {
    let currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.sqrt(currentValue);
  }
  
  function cubicRoot() {
    let currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.cbrt(currentValue);
  }
  
  function nthRoot() {
    let currentValue = parseFloat(document.getElementById('display').value);
    let nthRoot = parseFloat(prompt('Enter the root degree (y):'));
    document.getElementById('display').value = Math.pow(currentValue, 1 / nthRoot);
  }
  
  function naturalLog() {
    let currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.log(currentValue);
  }
  
  function logBaseTen() {
    let currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.log10(currentValue);
  }
  
  function factorial() {
    let currentValue = parseInt(document.getElementById('display').value);
    let result = 1;
    for (let i = 1; i <= currentValue; i++) {
      result *= i;
    }
    document.getElementById('display').value = result;
  }
  
  function tangent() {
    let currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.tan(currentValue);
  }
  
  function exponential() {
    let currentValue = parseFloat(document.getElementById('display').value);
    let exponent = parseFloat(prompt('Enter the exponent (EE):'));
    document.getElementById('display').value = currentValue * Math.pow(10, exponent);
  }
  
  function toggleRadians() {
  }
  
  function hyperbolicSine() {
    let currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.sinh(currentValue);
  }
  
  function hyperbolicCosine() {
    let currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.cosh(currentValue);
  }
  
  