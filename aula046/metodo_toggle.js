/**
 * Método Toggle
 */

const caixaCursos = document.querySelector('#caixaCursos');
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MariaDB', 'Visual Basic'];
const btnCursoSelecionado = document.querySelector('#btnCursoSelecionado');
const btnRemoverCurso = document.querySelector('#btnRemoverCurso');
const btnAdicionarAntesNovoCurso = document.querySelector('#btnAdicionarAntesNovoCurso');
const btnAdicionarDepoisNovoCurso = document.querySelector('#btnAdicionarDepoisNovoCurso');
const nomeCurso = document.querySelector('#nomeCurso');

let index = 0;

const tirarSelecao = () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')];
    cursosSelecionados.map((e) => {
        e.classList.remove('selecionado');
    });
};

const criarNovoCurso = (nomeCurso) => {
    const novoElemento = document.createElement('div');

    novoElemento.id = `c${index}`;
    novoElemento.classList.add('curso', 'c1');
    novoElemento.innerHTML = nomeCurso;
    novoElemento.addEventListener('click', (e) => {
        tirarSelecao();
        e.target.classList.toggle('selecionado');
    });

    return novoElemento;
};

cursos.map((e) => {
    const novoElemento = criarNovoCurso(e);

    caixaCursos.appendChild(novoElemento);
    index++;
});

const cursoSelecionado = () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')];

    return cursosSelecionados[0];
}

btnCursoSelecionado.addEventListener('click', () => {
    try {
        // const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent;
        // const cursoSelecionado = cs.parentNode.previousSibling.textContent;

        alert(`Curso selecionado: ${cursoSelecionado().innerHTML}`);
    } catch (error) {
        alert('Nenhum curso selecionado');
    }
});

btnRemoverCurso.addEventListener('click', () => {
    const cs = cursoSelecionado();

    try {
        cs.remove();
    } catch (error) {
        alert('Nenhum curso selecionado');
    }
});

btnAdicionarAntesNovoCurso.addEventListener('click', () => {
    const cs = cursoSelecionado();

    try {
        if (nomeCurso.value.trim()) {
            const novoCurso = criarNovoCurso(nomeCurso.value);

            caixaCursos.insertBefore(novoCurso, cs);

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

btnAdicionarDepoisNovoCurso.addEventListener('click', () => {
    const cs = cursoSelecionado();

    try {
        if (nomeCurso.value.trim()) {
            const novoCurso = criarNovoCurso(nomeCurso.value);

            caixaCursos.insertBefore(novoCurso, cs.nextSibling);

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