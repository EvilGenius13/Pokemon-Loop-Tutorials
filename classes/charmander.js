const Pokemon = require('./pokemon')

class Charmander extends Pokemon {
    constructor(name, type, pokedexnum, special) {
        super(name, type, pokedexnum)
        this.name = name;
        this.type = type;
        this.pokedexnum = pokedexnum;
        this.special = special;
    }
    
    Special() {
        console.log(`${this.name} used ${this.special}. It's super effective!`)
    }
}

module.exports = Charmander