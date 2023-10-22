import Stack from './src/stack.js'

let expression = '8 2 5 * + 1 3 2 * * /'

function postfixEvaluate(expression) {
  let stack = new Stack();
  let tokens = expression.split(' ');

  for (let token of tokens) {
    if (!isNaN(token)) { // si el token es un número
      stack.push(Number(token));
    } else { // si el token es un operador
      let rightOperand = stack.pop();
      let leftOperand = stack.pop();

      switch (token) {
        case '+':
          stack.push(leftOperand + rightOperand);
          break;
        case '-':
          stack.push(leftOperand - rightOperand);
          break;
        case '*':
          stack.push(leftOperand * rightOperand);
          break;
        case '/':
          stack.push(leftOperand / rightOperand);
          break;
        default:
          console.log('Operador desconocido: ' + token);
      }
    }
  }

  return stack.pop();
}

let value = postfixEvaluate(expression);
console.log(value); // salida: 3
