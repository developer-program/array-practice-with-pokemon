const pokemonData = require("./pokemonData");

// Example: using map, return all pokemons with their japanse name.
// Output: ['フシギダネ', 'フシギソウ', 'フシギバナ', 'ヒトカゲ',   'リザード', ...]
const pokemonsInJap = pokemonData.map(pokemon => pokemon.name.japanese);
console.log(pokemonsInJap);

// Q1. using map, return all pokemons with only the id and english name.
// Output:
// [{
//   id: 1,
//   name: Bulbasaur
// }, ...]

// Q2. using filter, return all pokemons with attach higher than 120(does not include 120).

// Q3. using filter, return all pokemons with english name longer than 8 characters.

// Q4. using filter, return all pokemons that contains flying type.

// Q5. using filter, return all pokemons that only have one type and is normal type.

// Q6. using reduce, return the sum of all SpAttack psychic pokemons

// Q7. using reduce, return an object with an array of all psychic pokemon names and their totalSpAttack 
// {
//   psychicPokemonsNames: ["abra", "slowbrow", ...],
//   totalSpAttack: 1234
// }

// Q8. using both filter and map,  return all pokemon enlish name and SpAttack if their SpAttach is > 120