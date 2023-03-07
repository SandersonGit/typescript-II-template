/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/
type Person = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: ACCOUNT;
};

type adminAccount = {
  account: string;
  permission: boolean;
};

type normalAccount = {
  account: string;
  permission: boolean;
};

enum ACCOUNT {
  ADMIN = "admin",
  NORMAL = "normal",
}

const Sanderson: Person = {
  id: "01",
  name: "Sandrson",
  email: "sahah@gmail.com",
  password: "123456",
  role: ACCOUNT.ADMIN,
};

/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
4. Crie duas pessoas, uma com permissão normal e a outra admin;
5. Guarde essas pessoas no array de usuários.

*/

console.log(
  `Nome da pessoa ${Sanderson.name}, aeu email é: ${Sanderson.email}`
);

type normalPerson = Person & normalAccount;
type adminPerson = Person & adminAccount;
type unionPersons = normalPerson | adminPerson  

const adminPersons: Array<adminPerson> = []
const normalPersons: Array<normalPerson> = []
const unionPersons: Array<unionPersons> = []

const userNormal_1: normalPerson = {
  id: "02",
  name: "Melanie",
  email: "sahasdsh@gmail.com",
  password: "1234dsws56",
  role: ACCOUNT.NORMAL,
  account: "Dra mel",
  permission: false,
}
const userAdmin_1: adminPerson = {
  id: "01",
  name: "Alicia",
  email: "sahasd1223sh@gmail.com",
  password: "1234dsws56",
  role: ACCOUNT.ADMIN,
  account: "Dra alicia",
  permission: true
}

unionPersons.push(userNormal_1)
unionPersons.push(userAdmin_1)


console.table(unionPersons);
