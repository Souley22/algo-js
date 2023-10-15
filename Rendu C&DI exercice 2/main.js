// Définition des caractéristiques
let caracteristiques = [
  {nom: "nerd", prob_mourir: Math.random(), prob_degats: Math.random(), prob_mourir_degats: Math.random()},
  {nom: "sportif", prob_mourir: Math.random(), prob_degats: Math.random(), prob_mourir_degats: Math.random()},
  {nom: "blonde", prob_mourir: Math.random(), prob_degats: Math.random(), prob_mourir_degats: Math.random()},
  {nom: "geek", prob_mourir: Math.random(), prob_degats: Math.random(), prob_mourir_degats: Math.random()},
  {nom: "flemmard", prob_mourir: Math.random(), prob_degats: Math.random(), prob_mourir_degats: Math.random()},
  {nom: "peureux", prob_mourir: Math.random(), prob_degats: Math.random(), prob_mourir_degats: Math.random()},
  {nom: "courageux", prob_mourir: Math.random(), prob_degats: Math.random(), prob_mourir_degats: Math.random()}


];

// Liste de prénoms dans laquelle on choisira aléatoirement 5 survivants
let prenoms = ["Ousmane", "Nathalie", "Damso", "Tiakola", "Eve", "Dioula", "Rama", "Sosso", "Kylian", "Giroud"];

// Création des survivants
// Vu qu'on chosit aléatoirement 5 prénoms dans la liste, on pourrait avoir des doublons dans les survivants (caractère aléatoire)
let survivants = Array.from({length: 5}, () => ({
  nom: prenoms[Math.floor(Math.random() * prenoms.length)],
  caracteristique: caracteristiques[Math.floor(Math.random() * caracteristiques.length)]
}));

// Initialisation du tueur
let tueur = {nom: "Jason", points_de_vie: 100};

// Boucle de jeu
while (tueur.points_de_vie > 0 && survivants.length > 0) {
  // Définir l'attaque du tueur et choix d'une cible
  let attaque = Math.random();
  let survivant_cible = survivants[Math.floor(Math.random() * survivants.length)];

   
  // Cas 1 : Cible meurt
  if (attaque <= survivant_cible.caracteristique.prob_mourir) {
      console.log(`${tueur.nom} a tué ${survivant_cible.nom}`);
      survivants = survivants.filter(s => s !== survivant_cible);

  // Cas 2 et 3 (infliger des dégats)
  } else {
      // Survivant esquive et inflige des dégâts
      if (attaque <= survivant_cible.caracteristique.prob_mourir_degats) {
          console.log(`${survivant_cible.nom} a esquivé et a infligé 10 points de dégâts`);
          tueur.points_de_vie -= 10;
      } else {
          // Survivant inflige des dégâts et meurt
          console.log(`${survivant_cible.nom} a infligé 15 points de dégâts mais est mort`);
          tueur.points_de_vie -= 15;
          survivants = survivants.filter(s => s !== survivant_cible);
      }
  }
}

// Afficher les morts
if (tueur.points_de_vie <= 0) {
  let morts = survivants.map(s => s.nom);
  console.log(`Jason est mort. Les survivants ont gagné mais RIP à ${morts.join(', ')}`);
} else {
  console.log(`${tueur.nom} a survécu. Il lui reste ${tueur.points_de_vie} points. Les survivants ont malheureusement perdu.`);

}