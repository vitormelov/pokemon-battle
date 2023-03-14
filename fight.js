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

// FUNCTIONS

function pokemonSelect1() {    
    let x = document.querySelector('input[name="pokemon"]:checked');  
    
    if(x.value == "pikachu") {
        document.getElementById("disp").innerHTML = `
            You selected ${pikachu.name} <br>
            Health: ${pikachu.health} hit points <br>
            Attack A: ${pikachu.attackA} hit points <br>
            Attack B: ${pikachu.attackB} hit points <br>
            Attack C: ${pikachu.attackC} hit points <br>
            Attack D: ${pikachu.attackD} hit points <br>
        `
        let p1 = pikachu

        return p1
    }

    if(x.value == "bulbasaur") {
        document.getElementById("disp").innerHTML = `
            You selected ${bulbasaur.name} <br>
            Health: ${bulbasaur.health} hit points <br>
            Attack A: ${bulbasaur.attackA} hit points <br>
            Attack B: ${bulbasaur.attackB} hit points <br>
            Attack C: ${bulbasaur.attackC} hit points <br>
            Attack D: ${bulbasaur.attackD} hit points <br>
        `
        let p1 = bulbasaur

        return p1
    }

    if(x.value == "charmander") {
        document.getElementById("disp").innerHTML = `
            You selected ${charmander.name} <br>
            Health: ${charmander.health} hit points <br>
            Attack A: ${charmander.attackA} hit points <br>
            Attack B: ${charmander.attackB} hit points <br>
            Attack C: ${charmander.attackC} hit points <br>
            Attack D: ${charmander.attackD} hit points <br>
        `
        let p1 = charmander

        return p1
    }

    if(x.value == "squirtle") {
        document.getElementById("disp").innerHTML = `
            You selected ${squirtle.name} <br>
            Health: ${squirtle.health} hit points <br>
            Attack A: ${squirtle.attackA} hit points <br>
            Attack B: ${squirtle.attackB} hit points <br>
            Attack C: ${squirtle.attackC} hit points <br>
            Attack D: ${squirtle.attackD} hit points <br>
        `
        let p1 = squirtle

        return p1
    }

};

function pokemonSelect2() { 

    let i = Math.ceil(Math.random()*4);

    if(i == 1) {
        document.getElementById("error").innerHTML = `
            Enemy selected ${butterfree.name} <br>
            Health: ${butterfree.health} hit points <br>
            Attack A: ${butterfree.attackA} hit points <br>
            Attack B: ${butterfree.attackB} hit points <br>
            Attack C: ${butterfree.attackC} hit points <br>
            Attack D: ${butterfree.attackD} hit points <br>
        `
        let p2 = butterfree

        return p2
    }

    if(i == 2) {
        document.getElementById("error").innerHTML = `
            Enemy selected ${pidgeot.name} <br>
            Health: ${pidgeot.health} hit points <br>
            Attack A: ${pidgeot.attackA} hit points <br>
            Attack B: ${pidgeot.attackB} hit points <br>
            Attack C: ${pidgeot.attackC} hit points <br>
            Attack D: ${pidgeot.attackD} hit points <br>
        `
        let p2 = pidgeot

        return p2
    }

    if(i == 3) {
        document.getElementById("error").innerHTML = `
            Enemy selected ${vulpix.name} <br>
            Health: ${vulpix.health} hit points <br>
            Attack A: ${vulpix.attackA} hit points <br>
            Attack B: ${vulpix.attackB} hit points <br>
            Attack C: ${vulpix.attackC} hit points <br>
            Attack D: ${vulpix.attackD} hit points <br>
        `
        let p2 = vulpix

        return p2
    }

    if(i == 4) {
        document.getElementById("error").innerHTML = `
            Enemy selected ${onix.name} <br>
            Health: ${onix.health} hit points <br>
            Attack A: ${onix.attackA} hit points <br>
            Attack B: ${onix.attackB} hit points <br>
            Attack C: ${onix.attackC} hit points <br>
            Attack D: ${onix.attackD} hit points <br>
        `
        let p2 = onix

        return p2
    }

};

function playAudio() {
    let m = document.getElementById("myAudio");
    m.play()
}

function fight() {

    playAudio();
    pokemonSelect1();
    pokemonSelect2();

    const p1 = pokemonSelect1()
    const p2 = pokemonSelect2()

    let health1 = p1.health;
    let health2 = p2.health;

    let round = 1;

    document.getElementById("dispute").innerHTML += `LETS START THE BATTLE <br><br>`

    while (health1 > 0 && health2 > 0) {

        //RANDOM ATTACK SELECTION

        let attack1 = Math.ceil(Math.random()*5);
        let attack2 = Math.ceil(Math.random()*5);

        //P1 ATTACK

        document.getElementById("dispute").innerHTML += `<br> ROUND ${round} <br>`
        
        if (attack1 == 1) {
            document.getElementById("dispute").innerHTML += `${p1.name}, USE ATTACK A! ~ ${p1.name} DEALS: ` + p1.attackA + ` DAMAGE <br>`;
            health2 = health2 - p1.attackA;
            document.getElementById("dispute").innerHTML += `${p2.name} HAS ${health2} HEALTH <br>`;
        } else if (attack1 == 2) {
            document.getElementById("dispute").innerHTML += `${p1.name}, USE ATTACK B! ~ ${p1.name} DEALS: ` + p1.attackB + ` DAMAGE <br>`;
            health2 = health2 - p1.attackB;
            document.getElementById("dispute").innerHTML += `${p2.name} HAS ${health2} HEALTH <br>`;
        } else if (attack1 == 3) {
            document.getElementById("dispute").innerHTML += `${p1.name}, USE ATTACK C! ~ ${p1.name} DEALS: ` + p1.attackC + ` DAMAGE <br>`;
            health2 = health2 - p1.attackC;
            document.getElementById("dispute").innerHTML += `${p2.name} HAS ${health2} HEALTH <br>`;
        } else if (attack1 == 4) {
            document.getElementById("dispute").innerHTML += `${p1.name}, USE ATTACK D! ~ ${p1.name} DEALS: ` + p1.attackD + ` DAMAGE <br>`;
            health2 = health2 - p1.attackD;
            document.getElementById("dispute").innerHTML += `${p2.name} HAS ${health2} HEALTH <br>`;
        } else if (attack1 == 5) {
            document.getElementById("dispute").innerHTML += `${p1.name}, USE ATTACK A! ~ ${p1.name} MISS THE ATTACK! <br>`;
            health2 = health2 
            document.getElementById("dispute").innerHTML += `${p2.name} HAS ${health2} HEALTH <br>`;
        };

        //P2 ATTACK

        if (attack2 == 1) {
            document.getElementById("dispute").innerHTML += `${p2.name}, USE ATTACK A! ~ ${p2.name} DEALS: ` + p2.attackA + ` DAMAGE <br>`;
            health1 = health1 - p2.attackA;
            document.getElementById("dispute").innerHTML += `${p1.name} HAS ${health1} HEALTH <br>`;
        } else if (attack2 == 2) {
            document.getElementById("dispute").innerHTML += `${p2.name}, USE ATTACK B! ~ ${p2.name} DEALS: ` + p2.attackB + ` DAMAGE <br>`;
            health1 = health1 - p2.attackB;
            document.getElementById("dispute").innerHTML += `${p1.name} HAS ${health1} HEALTH <br>`;
        } else if (attack2 == 3) {
            document.getElementById("dispute").innerHTML += `${p2.name}, USE ATTACK C! ~ ${p2.name} DEALS: ` + p2.attackC + ` DAMAGE <br>`;
            health1 = health1 - p2.attackC;
            document.getElementById("dispute").innerHTML += `${p1.name} HAS ${health1} HEALTH <br>`;
        } else if (attack2 == 4) {
            document.getElementById("dispute").innerHTML += `${p2.name}, USE ATTACK D! ~ ${p2.name} DEALS: ` + p2.attackD + ` DAMAGE <br>`;
            health1 = health1 - p2.attackD;
            document.getElementById("dispute").innerHTML += `${p1.name} HAS ${health1} HEALTH <br>`;
        } else if (attack2 == 5) {
            document.getElementById("dispute").innerHTML += `${p2.name}, USE ATTACK A! ~ ${p2.name} MISS THE ATTACK! <br>`;
            health1 = health1
            document.getElementById("dispute").innerHTML += `${p1.name} HAS ${health1} HEALTH <br>`;
        };


        round++;
    };

    if (health1 > 0) {
        document.getElementById("dispute").innerHTML +=(`<br> ${p2.name} GOT FAINTED. ${p1.name} WINS!`);
    };

    if (health2 > 0) {
        document.getElementById("dispute").innerHTML +=(`<br> ${p1.name} GOT FAINTED. ${p2.name} WINS!`);
    };

    if (health1 <= 0 && health2 <= 0) {
        document.getElementById("dispute").innerHTML +=("<br> BOTH GOT FAINTED");
    };
};

