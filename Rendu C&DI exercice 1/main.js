let personnage = "Souley";
let santémentale = 10;
let musiques = [
  "Anissa-Wejdene",
  "Tiakola-Parapluie",
  "Kaaris-Or noir", // Initialisation des 5 musiques.
  "Waiv-Cannabis",
  "Lil Baby-Fresstyle",
];
let changementdetaxi = 0;
let feux = 30; //nombres de feux au départ

while (feux > 0) {
  // à chaque feu rouge afficher la musique et si c'est wejdene, on change de taxi IF MUSIQUE = WEJDENE = -santé mentale && changement de taxi

  let random = Math.floor(Math.random() * musiques.length); // Formule pour qu'une des 5 musiques soit aléatoirement affichée.

  console.log(musiques[random]);
  feux += -1;

  if (musiques[random] == "Anissa-Wejdene") {
    // Si la musique aléatoirement choisi est Wejdene-Anissa :
    santémentale = santémentale - 1;
    changementdetaxi = changementdetaxi + 1;
  }

  if (santémentale > 0 && feux <= 0) {
    console.log(
      "Souley est bien arrivé à destination, il lui a fallu " +
        changementdetaxi +
        " changements de taxis "
    );
  }
  if ((musiques.random = "Wejdene-Anissa" && santémentale == 0)) {
    console.log("Explosion");
    break;
  }
  console.log("Il reste " + feux + "feux");
}
