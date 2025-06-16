console.log("if else Exercise");

let numero = Math.random();

if (numero >= 0.5) {
  alert("Greater than 0,5");
} else {
  alert("Lower than 0,5");
}
var Age = Math.floor(Math.random() * 101)

if (Age < 2) {
  categoria = "Bebe";
} else if (Age >= 2 && Age <= 12) {
  categoria = "Niño";
} else if (Age >= 13 && Age <= 19) {
  categoria = "Adolescente";
} else if (Age >= 20 && Age <= 30) {
  categoria = "Joven";
} else if (Age >= 31 && Age <= 60) {
  categoria = "Adulto";
} else if (Age >= 61 && Age <= 75) {
  categoria = "Adulto mayor";
} else {
  categoria = "Anciano";
}