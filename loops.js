const Charmander = require('./classes/charmander')
const Bulbasaur = require('./classes/bulbasaur')
const Squirtle = require('./classes/squirtle')
const Pikachu = require('./classes/pikachu')

//Array Example
let pokemonNames = ['Charmander', 'Bulbasaur', 'Squirtle', 'Pikachu'];

//Object Example
let pokemonNameType = {'Charmander': 'fire', 'Bulbasaur': 'grass', 'Squirtle': 'water', 'Pikachu': 'electric'};

//Object with integer example
let pokemonHP = {'Charmander': 80, 'Bulbasaur': 65, 'Squirtle': 98, 'Pikachu': 0}

//Array of Objects Example
let pokeCenter = [{
    name: 'Charmander', type: 'fire', pokedexnum: 4},
{   name: 'Bulbasaur', type: 'grass', pokedexnum: 1},
{   name: 'Squirtle', type: 'water', pokedexnum: 7},
{   name: 'Pikachu', type: 'electric', pokedexnum: 25},
];

// Pokemon array of objects (classes)
const charmander = new Charmander('Charmander', 'fire', 4, 'Ember')
const bulbasaur = new Bulbasaur('Bulbasaur', 'grass', 1, 'Razor Leaf')
const squirtle = new Squirtle('Squirtle', 'water', 7, 'splash')
const pikachu = new Pikachu('Pikachu', 'electric', 25, 'spark')
let pokemonClasses = []
pokemonClasses.push(charmander, bulbasaur, squirtle, pikachu)

// This is what each type of array/object look like when printed
console.log(pokemonNames);
console.log('----------------------');
console.log(pokemonNameType);
console.log('----------------------');
console.log(pokeCenter);
console.log('----------------------');
console.log(pokemonClasses);
console.log('----------------------');
// Basic for loop of array - will loop through names one by one
for (let index = 0; index <pokemonNames.length; index++) {
    console.log(`I choose you ${pokemonNames[index]}!`);
}
console.log('----------------------');

// For in loop of array
for (const pokemon in pokemonNames) {
    console.log(`Come back ${pokemonNames[pokemon]}!`);
};
console.log('----------------------');

// For of loop of array
for (const pokemon of pokemonNames) {
    console.log(`Are you okay ${pokemon}?`);
};
console.log('----------------------');

// For in loop of object
for (const pokemon in pokemonNameType) {
    console.log(`This pokemon is called ${pokemon} and his type is ${pokemonNameType[pokemon]}.`);
};
console.log('----------------------');

// For in loop of object but with integers
for (const pokemon in pokemonHP) {
    if (pokemonHP[pokemon] > 1) {
        console.log(`${pokemon} has ${pokemonHP[pokemon]} HP left. `);
    } else if (pokemonHP[pokemon] < 1) {
        console.log(`${pokemon} has feinted.`);
    }
};
console.log('----------------------');

// Basic loop through array of objects
for (let index = 0; index < pokeCenter.length; index++) {
    console.log(`Name: ${pokeCenter[index].name} | Type: ${pokeCenter[index].type} | PokeDex#: ${pokeCenter[index].pokedexnum}`);

};
console.log('----------------------');

// For each loop through array of objects
pokeCenter.forEach((pokemon) => {
    console.log(`If you want a ${pokemon.type} pokemon, choose ${pokemon.name}!`);
});
console.log('----------------------');

// loop through array of objects including their index position
console.log('Welcome to the PokeCenter:')
pokeCenter.forEach((pokemon, index) => {
    console.log(`${pokemon.name} is in slot ${index}.`)
});
console.log('----------------------');

// looping through array of objects (classes)
pokemonClasses.forEach((poke) => {
    poke.chooseYou();
    poke.Special();
});

