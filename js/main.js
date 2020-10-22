// esercizio funzioni palindromo
// richiesta parola utente
var user = prompt("inserisci una parola");
console.log(user);
// inversione parola
// function invert(label) {
//
//   var nameReverse = "";
//
//   var nameReverse = label.split("").reverse().join("");
//
//   return nameReverse;
// }

// inversione parola con il loop
function invert(label) {
  var nameReverse = "";

  for (var i = label.length -1; i >= 0 ; i--) {
     nameReverse += label[i];
  }
  return nameReverse;
}


// richiamo funzione
var invertLabel = invert(user);
console.log(invertLabel);
