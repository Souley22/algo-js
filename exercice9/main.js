class Pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }

  isLucky() {
    return Math.floor(Math.random() * 100) <= this.luck;
  }

  attackPokemon(pokemon) {
    if (this.isLucky()) {
      let damages = this.attack - pokemon.defense;
      pokemon.hp -= damages;
      console.log(
        `${this.name} a attaqué ${pokemon.name}, perdant ${damages} hp !`
      );
    } else {
      console.log(`${this.name} a raté son attaque !`);
    }
  }
}

let Dracofeu = new Pokemon("Dracofeu", 15, 37, 32, 56);
let Pikachu = new Pokemon("Pikachu", 20, 45, 25, 50);

Dracofeu.attackPokemon(Pikachu);

while ( Pokemon.hp <= 0) {
  
  Dracofeu.attackPokemon(Pikachu)
  
  console.log (`Il reste ${Pikachu.hp} de vie à Pikachu et il a pris ${Pikachu.damages} dégâts`)
 
  if (Pikachu.hp <= 0) {
    break;
  } else {
    Pikachu.attackPokemon(Dracofeu); // essayer avec 
  
}
}

console.log (`Il reste ${Pikachu.hp} de vie à Pikachu et il a pris ${Pikachu.damages} dégâts`)

console.log (`Il reste ${Dracofeu.hp} point de vie à Dracofeu et il a pris ${Dracofeu.damages}`) 
