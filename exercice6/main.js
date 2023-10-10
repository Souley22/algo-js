let a = "Jean";
let b = "Paul";

function checkName(nom1, nom2) {
  if (nom1 == nom2) {
    return true;
  } else {
    return false;
  }
}
let result = checkName(a, b);
console.log(result);
//Les 2 dernières lignes servent à afficher les résultats