// // Variables
// // CamelCase
// // let nombre = 'Gabriel';
// // let esMayorDeEdad = true;
// // let edad = 27;

// // console.log('antes',nombre, esMayorDeEdad, edad);

// // nombre = true;

// // console.log('despues',nombre, esMayorDeEdad, edad);

// // // Constantes
// // const hola = 'hola';

// // console.log(hola);

// // // Da error si intento cambiar la variable
// // // hola = 'otracosa';
// // console.log(1);

// // Sumas de strings
// const nombre = 'Gabriel';
// const edad = 27;

// console.log(`Mi nombre es ${nombre}, tengo ${edad}.`);


// console.log(2 / 2);

// // Primitivos
// // const num = 5;
// // console.log(Number.);
// // console.log(num + 2);

// // // Objetos
// const person = {
//   name: 'Gabriel',
//   edad: 27
// }

// console.log(`Mi nombre es: ${person.name}, tengo ${person.edad}`);

// const num1 = 5;
// const num2 = 10;
// Funciones
// Funciones viejas
// 1. Todas las funciones son su propio universo
// // 2. Todas las funciones les puedo agregar parametros.
// // 3. Si quiero devolver algo de una funcion necesito utilizar return
// // 4. Exclusivo a funciones viejas. La puedo llamar donde yo quiera.
// function sum (num1, num2) {
//   return num1 + num2;
// }

// const result1 = sum(2, 5);
// const result2 = sum(10, 5);
// const result3 = sum(result1, result2);
// console.log(result3);

// //Funcion nueva
// // Diferencias: Tienen un return implicito. Tengo que llamarlas despues de declarar la funcion.
// const num = (num1, num2) => num1 + num2;

// const result4 = sum(2, 5);
// const result5 = sum(10, 5);
// const result6 = sum(result1, result2);
// console.log(result6)
const createPerson = (username, password) => {
  return {
    username,
    password
  }
}
const person1 = createPerson('alejo123', '22424');
const person2 = createPerson('gabo123', '123');
const person3 = createPerson('carol10', '456');


let persons = [person1, person2, person3];

// Find
const findPerson = persons.find(person => {
  if (person.username === 'gabo123') {
    return person;
  }
});

// Crear
console.log('antes de crear',persons);
const person4 = createPerson('carlos78', '3535');
persons = persons.concat(person4);
console.log('despues de crear',persons);


// Eliminar
console.log('antes de eliminar',persons);
persons = persons.filter(person => {
  if (person.username !== 'alejo123') {
    return person;
  }
});
console.log('despues de eliminar',persons);

// Editar
console.log('antes de editar',persons);
persons = persons.map(person => {
  if (person.username === 'carol10') {
    // Editar objecto no mutable
    return {...person, password: 'hola123'};
  } else {
    return person;
  }
});
console.log('despues de editar',persons);












