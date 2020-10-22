// esercizio funzioni palindromo
// richiesta parola utente
var user = prompt("inserisci una parola");
console.log(user);
// inversione parola
// function invert(label) {
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
// comparazione parole
if (user == invertLabel) {
  console.log("la parola e' palindroma");
}
else {
  console.log("la parola non e' palindroma");
}
// esercizio funzioni pari e dispari
// scelta pari o dispari utente
var palyer = prompt("scegli pari o dispari");
// scelta numero utente
var numberPlayer = parseInt( prompt("scegli un numero da 1 a 5") );
// scelta numero computer
function randomPc(min, max) {
  var random = Math.floor( Math.random() * (max - min + 1) ) + min ;
  return random;
}





function sum(number) {
   var result = numP + numC;
   return result;
}

function equalOdd(compare) {
  if (sum % 2 == 0) {
    return equal;
  }

  return odd;
}
// richiamo funzione
var
