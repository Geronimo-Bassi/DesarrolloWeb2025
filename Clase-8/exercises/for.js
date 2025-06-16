console.log("for Exercise");

var arregloanimales = ["leon", "tigre", "elefante", "jirafa", "hipopotamo"];

for (var index = 0; index < arregloanimales.length; index++) {
  console.log(" animal : " + arregloanimales[index]);
}

for (var index = 0; index < arregloanimales.length; index++) {
    var palabramayuscula = arregloanimales[index]
    var palabramayuscula = palabramayuscula.charAt(0).toUpperCase() + palabramayuscula  .slice(1).toLowerCase();
    arreglomeses[index] = palabramayuscula;
    alert(palabramayuscula)
    
}   

let numeros = [];

for (var index = 0; index < 10; index++) {
  numeros.push(index);
}

console.log(numeros);


