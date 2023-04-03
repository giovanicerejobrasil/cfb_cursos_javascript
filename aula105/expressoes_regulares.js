/**
 * EXPRESSÕES REGULARES (REGEX)
 */

/**
 * /tln/i — Não usa o case sensitive
 * /tln/g — Global
 * [lnlnln...] — somente aquelas letras
 * [ln-ln] — limitador até
 * [ln-ln|ln-ln] — também
 *
 * Meta Caracteres
 * \d — Digitos
 * \bln (início) - \bln\b (exatamente) - ln\b (fim) — Caracteres Alfanuméricos
 * \s — Espaços
 *
 * Quantificadores
 * ln+ — retorna o que tenha apenas 1 ou mais do mesmo ex.: oi tudooo bem? => ['o', 'ooo']
 * ln* — retorna o primeiro sozinho ou com o segundo item ao seu lado e mais ocorrências
 * ln? — retorna o primeiro sozinho ou com o segundo item ao seu lado e apenas estas ocorrências
 */

let nome = new String('Giovaniii Cerejoooo Brasilllll 1997');
let email = 'giovani@giovani.com.br';
let num = '1127 1132 11 2711 2777'
console.log(nome);
console.log(email);
console.log(num);

console.log(nome.search(/cerejo/i));
console.log(nome.match(/O/ig));
console.log(nome.replace(/o/ig, 'Teste'));
console.log(nome.match(/[aio]/ig));
console.log(nome.match(/[a-g|h-z|0-9]/ig));

console.log(num.match(/\d/ig));
console.log(num.match(/\s/ig));
console.log(num.match(/\b11/ig));
console.log(num.match(/\b11\b/ig));
console.log(num.match(/11\b/ig));

console.log(nome.match(/o+|i+|l+/ig));
console.log(num.match(/27+/ig));
console.log(num.match(/27*/ig));
console.log(num.match(/27?/ig));