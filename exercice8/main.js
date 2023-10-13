let student = {
  name: "Soulemane",
  favoriteFood: "sorvesvd", // L'objet.
  city: "Bobigny",
};

let result = 0; // Initialisation du résultat
let values = Object.values(student); // permet de récuperer les informations de l'objet et d'en faire un tableau.

values.forEach((value) => {
  result += value.length; // Length indique le nombre d'arguments attendus par la fonction.
}); // Ici, on additionne chaque caractère de l'objet.

console.log(result);

if (result % 2) {
  // le boolean 0 = faux 1 = VRAI c'est la raison pour laquelle on utilise ici : console.log ("impair").
  console.log("impair");
} else {
  console.log("pair");
}
