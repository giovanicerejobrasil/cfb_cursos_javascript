const head = document.head;
const body = document.body;
const styleCSS = `
.topo {display: flex;justify-content: space-between;align-items: center;background-color: #ffbf2e;font-family: "Montserrat", sans-serif;}
.topo img {width: 100px;margin: 10px 20px;}
.topo .login {display: flex;justify-content: center;align-items: center;}
.topo .login p {margin: 0 10px; font-weight: bold}
.topo .login p > span {font-weight: normal;}
`;

const style = document.createElement('style');
style.id = 'styleCSS';
style.innerHTML = styleCSS;
head.appendChild(style);

// Header
const header = document.createElement('div');
header.id = 'topo';
header.classList.add('topo');
body.prepend(header);

// Img
const logo = `
<div id='logo' class='logo'>
    <img src='../images/js_logo.png' title='Javascript' alt='Javascript'>
</div>`;
header.innerHTML += logo;

// Login
const login = `
<div id='login' class='login'>
    <p id="matricula">Matrícula <span>894523</span></p>
    <p id="nome">Nome <span>Giovani Brasil</span></p>
</div>`;
header.innerHTML += login;