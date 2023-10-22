# Evaluación de Expresiones Postfijas en JavaScript

Este proyecto proporciona una implementación de una función en JavaScript que evalúa expresiones matemáticas en notación postfija, también conocida como notación polaca inversa.

## Función `postfixEvaluate`

La función `postfixEvaluate` toma una cadena de caracteres que representa una expresión matemática en notación postfija y devuelve el resultado de la evaluación de la expresión.

La función sigue estos pasos:

1. **Divide la expresión en tokens**: La función divide la expresión en tokens utilizando el espacio como delimitador. Los tokens pueden ser números u operadores.

2. **Recorre los tokens**: La función recorre cada token de la expresión.

   - Si el token es un número, se convierte a un número y se apila en la pila.

   - Si el token es un operador, se desapilan dos operandos de la pila y se realiza la operación correspondiente. El resultado se vuelve a apilar en la pila.

3. **Devuelve el resultado**: Al final del bucle, el resultado de la expresión completa es el único valor que queda en la pila, por lo que se desapila y se devuelve como resultado.

## Uso

Para usar esta función, primero debes importar la clase `Stack` desde el archivo `stack.js` en el directorio `src`. Luego, puedes llamar a la función `postfixEvaluate` con una expresión postfija como argumento. La función devolverá el resultado de la evaluación de la expresión.

Aquí tienes un ejemplo:

```javascript
import Stack from './src/stack.js'

let expression = '8 2 5 * + 1 3 2 * * /'
let value = postfixEvaluate(expression)
console.log(value) // salida: 3
```

En este ejemplo, la expresión `'8 2 5 * + 1 3 2 * * /'` se evalúa a `3`.
