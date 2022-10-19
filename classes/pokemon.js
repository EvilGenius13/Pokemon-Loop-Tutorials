class Pokemon {
    constructor(name, type, pokedexnum) {
        this.name = name;
        this.type = type;
        this.pokedexnum = pokedexnum;
    }
    chooseYou () {
        console.log(`I choose you, ${this.name}!`);
    }
    comeBack () {
        console.log(`Come back, ${this.name}!`);
    }
}

module.exports = Pokemon;
