/**
 * Operador Condicional (SWITCH CASE)
 */

let colocacao = 5;

switch (colocacao) {
    case 1:
        console.log("Primeiro Colocado");
        break;
    case 2:
        console.log("Segundo Colocado");
        break;
    case 3:
        console.log("Terceiro Colocado");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Prêmio de participação");
        break;
    default:
        console.log("Não subiu ao pódio");
        break;
}