// esercizio funzioni palindromo
// richiesta parola utente
var user = prompt("inserisci una parola");
console.log(user);
// inversione parola
function invert(label) {

  var nameReverse = "";

  var nameReverse = label.split("").reverse().join("");

  return nameReverse;
}

// richiamo funzione
var invertLabel = invert(user);
console.log(invertLabel);
