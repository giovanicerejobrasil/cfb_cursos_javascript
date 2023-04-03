/**
 * PDF E IMPRESSÃO
 */

const btnImprimir = document.querySelector('#btnImprimir');

const retornaEstilo = () => {
    return `
    <style>
        table {
            width: 100%;
            font 25px Calibri;
        }
        
        table, th, td {
            border: 2px solid #888;
            border-collapse: collapse;
            padding: 4px 8px;
            text-align: center;
        }    
    </style>
    `;
}

const retornaConteudo = () => {
    return document.querySelector('#tabela').innerHTML;
}

const retornaDocumento = () => {
    return `
    <html>
        <head>
            <title>Imprimir - Curso Javascript</title>
            ${retornaEstilo()}
        </head>
        <body>
            ${retornaConteudo()}
        </body>
    </html>
    `;
}

btnImprimir.addEventListener('click', () => {
    const win = window.open('', '', 'height=700, width=700');
    win.document.write(retornaDocumento());
    win.print();
    win.close();
});