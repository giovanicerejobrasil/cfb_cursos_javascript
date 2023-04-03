/**
 * TRABALHANDO COM MÓDULOS
 */

import Cursos from './cursos.js';

console.log(Cursos.getTodosCursos());
console.log(Cursos.getCurso(1));
console.log(Cursos.addCurso('Ruby'));
console.log(Cursos.getTodosCursos());
console.log(Cursos.removerCurso('PHP'));
console.log(Cursos.getTodosCursos());
console.log(Cursos.removerTodosCursos());
console.log(Cursos.getTodosCursos());