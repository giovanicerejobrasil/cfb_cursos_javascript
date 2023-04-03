export default class Cursos {
    static cursos = ['Javascript', 'HTML', 'CSS', 'PHP', 'MySQL', 'Python', 'Java', 'C#', 'C++'];
    static getTodosCursos() {
        return this.cursos;
    }

    static getCurso(iCurso) {
        return this.cursos[iCurso];
    }

    static addCurso(novoCurso) {
        this.cursos.push(novoCurso);
        return `Curso '${novoCurso}' adicionado com sucesso!`;
    }

    static removerCurso(nomeCurso) {
        this.cursos = this.cursos.filter((curso)=> curso !== nomeCurso);
        return `Curso '${nomeCurso}' removido com sucesso!`;
    }

    static removerTodosCursos() {
        this.cursos = [];
        return `Todos os curso foram removidos com sucesso!`;
    }
}