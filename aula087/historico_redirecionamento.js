/**
 * MATH
 */

const url = document.querySelector('#url');
const btnUrl = document.querySelector('#btnUrl');

btnUrl.addEventListener('click', (e) => {
    // window.location = "https://google.com.br"; // Redireciona para a url
    // window.location.replace("https://google.com.br"); // Redireciona e remove a url atual do histórico
    // window.location.assign("https://google.com.br"); // Redireciona e não remove a url atual do histórico
    // window.location.reload(); // Recarrega a página atual
    // window.history.back(); // Redireciona para a página anterior do histórico
    // window.history.forward(); // Redireciona para a próxima página do histórico
    // window.history.go(1); // Redireciona para a página que se quer através do tamanho do histórico
    if (url.value) {
        e.preventDefault();
        window.location = url.value;
    }
});