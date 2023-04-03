const caixaCursos = document.querySelector('#caixaCursos');
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MariaDB', 'Visual Basic'];
const btnCursoSelecionado = document.querySelector('#btnCursoSelecionado');
const btnRemoverCurso = document.querySelector('#btnRemoverCurso');
const btnAdicionarAntesNovoCurso = document.querySelector('#btnAdicionarAntesNovoCurso');
const btnAdicionarDepoisNovoCurso = document.querySelector('#btnAdicionarDepoisNovoCurso');
const nomeCurso = document.querySelector('#nomeCurso');

let index = 0;

const criarNovoCurso = (nomeCurso) => {
    const novoElemento = document.createElement('div');
    novoElemento.id = `c${index}`;
    novoElemento.classList.add('curso', 'c1');
    novoElemento.innerHTML = nomeCurso;

    const comandos = document.createElement('div');
    comandos.classList.add('comandos');

    const rb = document.createElement('input');
    rb.setAttribute('type', 'radio');
    rb.name = 'rb_curso';

    comandos.appendChild(rb);

    novoElemento.appendChild(comandos);

    return novoElemento;
};

cursos.map((e) => {
    const novoElemento = criarNovoCurso(e);

    caixaCursos.appendChild(novoElemento);
    index++;
});

const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll('input[type=radio]')];
    const radioSelecionado = todosRadios.filter((e) => e.checked);

    return radioSelecionado[0];
}

btnCursoSelecionado.addEventListener('click', (e) => {
    const rs = radioSelecionado();
    if (rs) {
        // const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent;
        const cursoSelecionado = rs.parentNode.previousSibling.textContent;

        alert(`Curso selecionado: ${cursoSelecionado}`);
        return;
    }

    alert('Nenhum curso selecionado');
});

btnRemoverCurso.addEventListener('click', (e) => {
    const rs = radioSelecionado();
    try {
        const cursoSelecionado = rs.parentNode.parentNode;

        cursoSelecionado.remove();
    } catch (error) {
        alert('Nenhum curso selecionado');
    }
});

btnAdicionarAntesNovoCurso.addEventListener('click', (e) => {
    const rs = radioSelecionado();
    try {
        if (nomeCurso.value.trim()) {
            const cursoSelecionado = rs.parentNode.parentNode;
            const novoCurso = criarNovoCurso(nomeCurso.value);

            caixaCursos.insertBefore(novoCurso, cursoSelecionado);

            nomeCurso.value = '';
            nomeCurso.focus();

            index++;
        } else {
            alert('Digite o nome do curso');
        }
    } catch (error) {
        alert('Nenhum curso selecionado');
    }
});

btnAdicionarDepoisNovoCurso.addEventListener('click', (e) => {
    const rs = radioSelecionado();
    try {
        if (nomeCurso.value.trim()) {
            const cursoSelecionado = rs.parentNode.parentNode;
            const novoCurso = criarNovoCurso(nomeCurso.value);

            caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling);

            nomeCurso.value = '';
            nomeCurso.focus();

            index++;
        } else {
            alert('Digite o nome do curso');
        }
    } catch (error) {
        alert('Nenhum curso selecionado');
    }


});