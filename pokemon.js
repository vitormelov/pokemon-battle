// POKEMONS

class pokemon1 {
    constructor(name, health, attackA, attackB, attackC, attackD) {
        this.name = name;
        this.health = health;
        this.attackA = attackA;
        this.attackB = attackB;
        this.attackC = attackC;
        this.attackD = attackD;
    };
};

class pokemon2 {
    constructor(name, health, attackA, attackB, attackC, attackD) {
        this.name = name;
        this.health = health;
        this.attackA = attackA;
        this.attackB = attackB;
        this.attackC = attackC;
        this.attackD = attackD;
    };
};

const pikachu = new pokemon1(`PIKACHU`, 200, 20, 10, 5, 15);
const bulbasaur = new pokemon1(`BULBASAUR`, 250, 10, 10, 5, 15);
const charmander = new pokemon1(`CHARMANDER`, 150, 20, 20, 10, 15);
const squirtle = new pokemon1(`SQUIRTLE`, 300, 5, 10, 5, 10);

const butterfree = new pokemon2(`BUTTERFREE`, 200, 20, 10, 5, 15);
const pidgeot = new pokemon2(`PIDGEOT`, 250, 10, 10, 5, 15);
const vulpix = new pokemon2(`VULPIX`, 150, 20, 20, 10, 15);
const onix = new pokemon2(`ONIX`, 300, 5, 10, 5, 10);

// PLAYER 1 POKEMON CHOOSE

function p1choose(pokemon1) {
    console.log("--- P1, CHOOSE YOUR POKEMON --- \n");
    console.log(`P1 chose ${pokemon1.name}`);
    console.table(pokemon1);
    console.log("");
};

// PLAYER 2 POKEMON CHOOSE

function p2choose(pokemon2) {
    console.log("--- P2, CHOOSE YOUR POKEMON --- \n") ;
    console.log(`P2 chose ${pokemon2.name}`);
    console.table(pokemon2);
    console.log("");
};

// FIGHTING

function fight(pokemon1, pokemon2) {

    p1choose(pokemon1);
    p2choose(pokemon2);

    console.log('--- BATTLE PHASE --- \n');

    let health1 = pokemon1.health;
    let health2 = pokemon2.health;

    let round = 1

    while (health1 > 0 && health2 > 0) {

        //RANDOM ATTACK SELECTION

        let attack1 = Math.ceil(Math.random()*5);
        let attack2 = Math.ceil(Math.random()*5);

        //P1 ATTACK

        console.log(`ROUND ${round}`)
        
        if (attack1 == 1) {
            console.log(`${pokemon1.name}, USE ATTACK A! ~ ${pokemon1.name} DEALS: ` + pokemon1.attackA + ` DAMAGE`);
            health2 = health2 - pokemon1.attackA;
            console.log(`${pokemon2.name} ficou com ${health2} de vida`);
        } else if (attack1 == 2) {
            console.log(`${pokemon1.name}, USE ATTACK B! ~ ${pokemon1.name} DEALS: ` + pokemon1.attackB + ` DAMAGE`);
            health2 = health2 - pokemon1.attackB;
            console.log(`${pokemon2.name} ficou com ${health2} de vida`);
        } else if (attack1 == 3) {
            console.log(`${pokemon1.name}, USE ATTACK C! ~ ${pokemon1.name} DEALS: ` + pokemon1.attackC + ` DAMAGE`);
            health2 = health2 - pokemon1.attackC;
            console.log(`${pokemon2.name} ficou com ${health2} de vida`);
        } else if (attack1 == 4) {
            console.log(`${pokemon1.name}, USE ATTACK D! ~ ${pokemon1.name} DEALS: ` + pokemon1.attackD + ` DAMAGE`);
            health2 = health2 - pokemon1.attackD;
            console.log(`${pokemon2.name} ficou com ${health2} de vida`);
        } else if (attack1 == 5) {
            console.log(`${pokemon1.name}, USE ATTACK A! ~ ${pokemon1.name} MISS THE ATTACK!`);
            health2 = health2 
            console.log(`${pokemon2.name} ficou com ${health2} de vida`);
        };

        //P2 ATTACK

        if (attack2 == 1) {
            console.log(`${pokemon2.name}, USE ATTACK A! ~ ${pokemon2.name} DEALS: ` + pokemon2.attackA + ` DAMAGE`);
            health1 = health1 - pokemon2.attackA;
            console.log(`${pokemon1.name} ficou com ${health1} de vida \n`);
        } else if (attack2 == 2) {
            console.log(`${pokemon2.name}, USE ATTACK B! ~ ${pokemon2.name} DEALS: ` + pokemon2.attackB + ` DAMAGE`);
            health1 = health1 - pokemon2.attackB;
            console.log(`${pokemon1.name} ficou com ${health1} de vida \n`);
        } else if (attack2 == 3) {
            console.log(`${pokemon2.name}, USE ATTACK C! ~ ${pokemon2.name} DEALS: ` + pokemon2.attackC + ` DAMAGE`);
            health1 = health1 - pokemon2.attackC;
            console.log(`${pokemon1.name} ficou com ${health1} de vida \n`);
        } else if (attack2 == 4) {
            console.log(`${pokemon2.name}, USE ATTACK D! ~ ${pokemon2.name} DEALS: ` + pokemon2.attackD + ` DAMAGE`);
            health1 = health1 - pokemon2.attackD;
            console.log(`${pokemon1.name} ficou com ${health1} de vida \n`);
        } else if (attack2 == 5) {
            console.log(`${pokemon2.name}, USE ATTACK A! ~ ${pokemon2.name} MISS THE ATTACK!`);
            health1 = health1
            console.log(`${pokemon1.name} ficou com ${health1} de vida \n`);
        };


        round++;
    };

    if (health1 > 0) {
        console.log(`${pokemon2.name} GOT FAINTED. ${pokemon1.name} WINS!`);
    };

    if (health2 > 0) {
        console.log(`${pokemon1.name} GOT FAINTED. ${pokemon2.name} WINS!`);
    };

    if (health1 <= 0 && health2 <= 0) {
        console.log("BOTH GOT FAINTED");
    };
};

fight(charmander, onix);

