/**
 * LET, VAR e CONST
 */
"use strict";

function teste() {
    if (true) {
        let name = "Giovani";
        console.log("Dentro do IF do teste: " + name);
    }

    // console.log("Fora do IF do teste: " + name); // Error
}

teste();

// console.log("Fora do teste: " + name) // Error

// ========================================================================

let name2 = "Giovani";

name2 = "Estudante";
console.log(name2);

name2 = 27;
console.log(name2);

// ========================================================================

const curso = "JavaScript";
console.log(curso);

// curso = "PHP"; //Error
// console.log(curso);