// const operation = prompt('Coloca tu operacion');

// const getNumbers = (signo) => {
//   const [num1, num2] = operation.split(signo);
//   return {
//     num1: Number(num1),
//     num2: Number(num2)
//   }
// }

// let result = 0;

// // 1. Obtener el signo
// if (operation.includes('+')) {
//   const { num1, num2 } = getNumbers('+');
//   result = num1 + num2;
// } else if (operation.includes('-')) {
//   const { num1, num2 } = getNumbers('-');
//   result = num1 - num2;
// } else if (operation.includes('x')) {
//   const { num1, num2 } = getNumbers('x');
//   result = num1 * num2;
// } else if (operation.includes('/')) {
//   const { num1, num2 } = getNumbers('/');
//   result = num1 / num2;
// } else {
//   result = 'Error';
// }

// console.log(result);

// if (Number.isFinite(result)) {
//   alert(`El resultado es: ${result}`)
// } else {
//   alert('Hubo un error colocando alguno de los dos numeros');
// }


const createUser = (username, password) => {
  return {
    username,
    password
  }
}
const user1 = createUser('alejo123', '22424'); 
const user2 = createUser('gabo123', '123');
const user3 = createUser('carol10', '456');
let users = [user1, user2, user3];
let intentosUser = 3;
let intentosPassword = 3;
let usuarioIngresado = '';
let passwordIngresado = '';
let userExist = users.find(user => usuarioIngresado === user.username);

while (intentosUser > 0 && intentosPassword > 0 && userExist?.password !== passwordIngresado) {
  if (userExist) {
      passwordIngresado = prompt('Ingrese su password');
      intentosPassword = intentosPassword - 1;
  } else {
    usuarioIngresado = prompt('Ingrese su usuario');
    userExist = users.find(user => usuarioIngresado === user.username);
    intentosUser = intentosUser - 1;
  }
}

if (userExist && passwordIngresado === userExist.password) {
  alert(`Bienvenido ${userExist.username}`);
} else {
  alert('Bloqueado');
}