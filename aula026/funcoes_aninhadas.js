/**
 * Funções Aninhadas
 */

const soma = (...valores) => {
    const somar = val => {
        let res = 0;
        for (const v of val) {
            res += v;
        }
        return res;
    }
    return somar(valores);
};

console.log(soma(10, 5, 15));
console.log(soma(11, 22, 33));