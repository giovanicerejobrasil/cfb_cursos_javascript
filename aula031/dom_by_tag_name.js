/**
 * Manipulação de DOM (getElementsByTagName)
 */

const divsCollection = [...document.getElementsByTagName('div')];

divsCollection.map(e => {
    console.log(e.innerHTML);
})