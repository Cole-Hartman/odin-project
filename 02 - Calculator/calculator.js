var buttons = [
  document.getElementById("clear"),
  document.getElementById("multiplication"),
  document.getElementById("7"),
  document.getElementById("8"),
  document.getElementById("9"),
  document.getElementById("minus"),
  document.getElementById("4"),
  document.getElementById("5"),
  document.getElementById("6"),
  document.getElementById("plus"),
  document.getElementById("1"),
  document.getElementById("2"),
  document.getElementById("3"),
  document.getElementById("division"),
  document.getElementById("bksp"),
  document.getElementById("0"),
  document.getElementById("period"),
  document.getElementById("equals"),
];

let currentNum = 0;
const bottomNumber = document.getElementById("bottom-number");
const topNumber = document.getElementById("top-number");
let operators = ["+", "-", "*", "/"];

const handleInput = function (button) {
  if (button.id == "clear") {
    clearScreen(button);
  } else if (button.id == "bksp") {
    backspace(button);
  } else if (
    (button.id == "division" ||
      button.id == "plus" ||
      button.id == "minus" ||
      button.id == "multiplication") &&
    operators.some((op) => bottomNumber.innerHTML.includes(op))
  ) {
    //COMPUTE ANSWER
    computeHelper(button);
  } else if (button.id == "equals") {
    //COMPUTE ANSWER
    computeHelper(button);
    bottomNumber.innerHTML = "";
  } else {
    bottomNumber.innerHTML += button.innerHTML;
  }
};

const clearScreen = function (button) {
  topNumber.innerHTML = "";
  bottomNumber.innerHTML = "";
  currentNum = 0;
};

const backspace = function (button) {
  var content = bottomNumber.innerHTML;
  content = content.slice(0, -1);
  bottomNumber.innerHTML = content;
};

const generateVariables = function (button) {
  var bottomNumberContent = bottomNumber.innerText;
  var variables = [];

  var operatorIndex = -1;

  for (var i = 0; i < operators.length; i++) {
    operatorIndex = bottomNumberContent.indexOf(operators[i]);
    if (operatorIndex !== -1) {
      //Found the operator, so break
      break;
    } else {
      variables[0] = bottomNumberContent;
    }
  }
  if (operatorIndex !== -1) {
    var x = bottomNumberContent.slice(0, operatorIndex).trim();
    var operator = bottomNumberContent.charAt(operatorIndex);
    var y = (secondNumber = bottomNumberContent
      .slice(operatorIndex + 1)
      .trim());
    variables[0] = x;
    variables[1] = operator;
    variables[2] = y;
  }

  //Good for debugging
  // console.log("First Number:", variables[0]);
  // console.log("Operator:", variables[1]);
  // console.log("Second Number:", variables[2]);

  return variables;
};

const roundResult = function (number, decimals) {
  const factor = Math.pow(10, decimals);
  return Math.round(number * factor) / factor;
};

const operate = function (x, operator, y, currentNum) {
  var result;
  x = Number(x);
  y = Number(y);
  if (x == "0") {
    x = currentNum;
  }
  switch (operator) {
    case "+":
      result = parseFloat(x) + parseFloat(y);
      break;
    case "-":
      result = parseFloat(x) - parseFloat(y);
      break;
    case "*":
      result = parseFloat(x) * parseFloat(y);
      break;
    case "/":
      // Check for division by zero
      if (y === 0) {
        topNumber.innerHTML = "ERROR";
        throw new Error("Division by zero is not allowed");
      }
      result = parseFloat(x) / parseFloat(y);
      break;
    default:
      result = x;
  }
  result = roundResult(result, 5);
  return result;
};

const computeHelper = function (button) {
  var lastCharacter = button.innerHTML; //Store new operation
  var variables = generateVariables(button);
  var answer = operate(variables[0], variables[1], variables[2], currentNum);
  if (isNaN(answer)) {
    answer = 0;
  }
  topNumber.innerHTML = answer;
  currentNum = answer;
  if (lastCharacter != "=") {
    bottomNumber.innerHTML = "" + lastCharacter;
  }
};

// ON CLICK
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    handleInput(button);
  });
});

buttons.forEach(function (button) {
  button.addEventListener("mouseover", function () {
    button.classList.add("bg-zinc-700");
  });
});

buttons.forEach(function (button) {
  button.addEventListener("mouseout", function () {
    button.classList.remove("bg-zinc-700");
  });
});

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.style.boxShadow =
      "5px 5px 5px rgba(9, 9, 9, 0.0), -5px -5px 3.5px rgba(131, 131, 131, 0.0)";
    setTimeout(function () {
      button.style.boxShadow =
        "5px 5px 5px rgba(9, 9, 9, 0.3), -5px -5px 3.5px rgba(131, 131, 131, 0.15)";
    }, 200);
  });
});
