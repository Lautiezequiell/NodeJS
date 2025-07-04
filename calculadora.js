export function info() {
 let mensaje = "Con el presente modulo usted podrá realizar las operaciones básicas de matemática como sumar, restar, multiplicar y dividir";
        console.log(mensaje);
}

export function suma (a,b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Ambos argumentos deben ser números");
    }
  return a + b;
}

export function resta (a,b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Ambos argumentos deben ser números");
    } else 
  return a - b;
}

export function multiplicacion (a,b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Ambos argumentos deben ser números");
    } else 
  return a * b;
}

export function division (a,b) {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Ambos argumentos deben ser números");
    } else if (b === 0) {
    throw new Error("No se puede dividir por cero");
  } else
  return a / b;
}

