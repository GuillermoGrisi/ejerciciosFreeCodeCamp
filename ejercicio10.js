/* Reemplace las dos declaraciones if con una declaración, usando el &&operador, 
que devolverá la cadena Yessi vales menor o igual que 50
y mayor o igual que 25. De lo contrario, devolverá la cadena No. */

function testLogicalAnd(val) {
    if (val >= 25 && val <=50) {
        return "Yes";
    }
    return "No";
  }
  testLogicalAnd(10);

/*   Combine las dos ifdeclaraciones en una declaración que devuelve la cadena Outside
  si valno está entre 10y 20, inclusive.
   De lo contrario, devuelve la cadena Inside. */

  function testLogicalOr(val) {
    if (val < 10 || val >20) {
      return "Outside";
    }
    return "Inside";
  }
  testLogicalOr(15);