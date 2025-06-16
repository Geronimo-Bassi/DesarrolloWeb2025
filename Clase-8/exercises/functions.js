console.log("function Exercise");

var variable1 = 10;
var variable2 = 4.2;

function sumarnumeros(variable1, variable2) {

    if (typeof variable1 !== 'number' || variable2 !== 'number') {
    alert('Uno de los parámetros no es un número');
    return NaN;
    }
     if (!validateInteger(variable1)) {
    alert("El primer parámetro no es un entero. Se redondeará.");
    variable1 = Math.round(variable1);
  }

  if (!validateInteger(variable2)) {
    alert("El segundo parámetro no es un entero. Se redondeará.");
    variable2 = Math.round(variable2);
  }

  return a + b;
}

 
  

console.log("La suma de " + variable1 + " y " + variable2 + " es: " + sumarnumeros(variable1, variable2));


var numero = 5;
function validateInteger(numero) {
  return Number.isInteger(numero);
}

console.log("El número " + numero + " es un entero: " + validateInteger(numero));


