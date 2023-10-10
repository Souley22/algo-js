let names = [];
names.push("Vincent", "Paul", "Arthur");

names.forEach((name) => {
  name = name + " va à la pêche "; // Concaténation. Une autre manière : name+= "va à la peche";
  console.log(name);
});
