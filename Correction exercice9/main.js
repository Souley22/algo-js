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

while (Dracofeu.hp > 0 && Pikachu.hp > 0) {
  Dracofeu.attackPokemon(Pikachu);
  console.log("Pikachu", Pikachu.hp)

  if (Pikachu.hp <= 0) {
    console.log("Pikachu a perdu le combat, il est K.O !");
    break;
  }

  Pikachu.attackPokemon(Dracofeu);
  console.log("Dracofeu", Dracofeu.hp)
  if (Dracofeu.hp <= 0) {
    console.log("Dracofeu a perdu le combat, il est K.O !");
    break;
  }
}
