/* Usando leto const, declare una variable global nombrada myGlobalfuera de cualquier función. Inicialícelo con un valor de 10.
Dentro de la función fun1, asigne 5sin oopsGlobal usar las palabras clave var, leto const.
1-myGlobaldebe ser definido
2-myGlobaldebe tener un valor de10
3-myGlobaldebe declararse utilizando las palabras clave letoconst
4-oopsGlobaldebe ser una variable global y tener un valor de5 */

let myGlobal = 10;

function fun1() {
oopsGlobal = 5;
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}