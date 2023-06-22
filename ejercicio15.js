const arr1 = ["2","3","4","6","8","10"];
const arr2 = arr1.slice(3, 6);//creo un nuevo array desde la posicion [3] a la [6]
const num = arr2.map(Number);//paso arr2 de string a number

let suma = 0;
for (let i = 0; i<num.length; i++){
    suma += num[i]; 
}

console.log(suma);

//hacer .map para saber las edades de un array de objetos
const persona =[{name:"jose", edad:20},{name:"Pepe",edad:34},{name:"nestor", edad:60}];
const edades = persona.map((persona) => persona.edad);
console.log(edades);

//usar .filter para filtar los nombres que contengan "a"
const names = ["Ana", "Pablo", "Pedro", "Carlos", "Hugo"];
const filteredNames = names.filter((name) => name.includes("a"));//nombres que contengan con "a"
const filteredNames2 = names.filter((name) => name.startsWith("P"));//nombres que empiecen con "P"

console.log(filteredNames);

//.find,.findIndex, .findLast, .findLastIndex
const nombre = ["Ana", "Pablo", "Pedro", "Carlos", "Hugoo"];

nombres.find((name) => name.length == 5);// devuelve el primer elemento que coincida con name.lenght ==5- 'Pablo'
nombres.findIndex((name) => name.length == 5);//devuelve la posiscion del primer elemento que coincida con name.lenght ==5- 1
//findLast = find (pero empezando de derecha a izq)
//findLastIndex = findIndex (pero empezando de derecha a izq)

//.reduce ejecuta la cond con cada elemento del array y va acumulando el resultado
//en este caso es una suma,se puede restar, etc.
const numbers = [95, 5, 25, 10, 25];
const sumar = numbers.reduce((first, second) => first + second);
console.log(sumar);

//destructurar un array
const debug = (param) => console.log(...param);
const array = [1, 2, 3, 4, 5];
debug(array);

//estructurar un array
const debug1 = (...param) => console.log(param);
debug1(1, 2, 3, 4, 5); //devuelve [1,2,3,4,5]