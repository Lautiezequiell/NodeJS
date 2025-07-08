 import { suma, resta, multiplicacion, division } from './calculadora.js';

function calcular(nombreCalculo, valor1, valor2) {
  let resultado;

  switch (nombreCalculo) {
    case 'suma':
      resultado = suma(valor1, valor2);
      break;
    case 'resta':
      resultado = resta(valor1, valor2);
      break;
    case 'multiplicacion':
      resultado = multiplicacion(valor1, valor2);
      break;
    case 'division':
      resultado = division(valor1, valor2);
      break;
    default:
      console.log("Operación no válida");
      return;
  }

  console.log(`Resultado de ${nombreCalculo}(${valor1}, ${valor2}) = ${resultado}`);
}

// 🔹 Pruebas con cada cálculo 
calcular('suma', 10, 5);
calcular('resta', 10, 5);
calcular('multiplicacion', 10, 5);
calcular('division', 10, 5);
calcular('division', 10, 0); // Prueba de división por cero para el mensaje wara wara