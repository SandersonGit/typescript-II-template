/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

type Pessoa = {
  name: string;
  age: number;
  color: string;
};

enum COLOR {
  AZUL = "azul",
  VERMELHO = "vermelho",
  AMARELO = "amarelo",
}

const persons: Pessoa = {
  name: "Sander",
  age: 34,
  color: COLOR.AZUL,
};
const persons1: Pessoa = {
  name: "Saçi",
  age: 43,
  color: COLOR.VERMELHO,
};
const persons2: Pessoa = {
  name: "Ricardo",
  age: 55,
  color: COLOR.AMARELO,
};
const persons3: Pessoa = {
  name: "Rafael",
  age: 30,
  color: COLOR.VERMELHO,
};
console.table(persons)
console.table(persons1)
console.table(persons2)
console.table(persons3)