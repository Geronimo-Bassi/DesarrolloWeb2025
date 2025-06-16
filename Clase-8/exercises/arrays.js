console.log("arrays Exercise");

var arreglomeses =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log(arreglomeses[4]);
console.log(arreglomeses[12]);

arreglomeses.sort();
console.log(arreglomeses);
    
arreglomeses.unshift("Mes 0");

arreglomeses.push("Mes 13");

console.log(arreglomeses);

arreglomeses.shift();
arreglomeses.pop();

console.log(arreglomeses); 

arreglomeses.reverse();
console.log(arreglomeses);

var meses = arreglomeses.join(", ");

console.log("Los meses del año son: " + meses);

var meses5a11 = arreglomeses.slice(5, 11);
