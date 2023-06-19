/* Agregue el operador de igualdad a la línea indicada para que la 
función devuelva la cadena Equalcuando valsea equivalente a 12. */

function testEqual(val) {
    if (val == 12) { 
      return "Equal";
    }
    return "Not Equal";
  } 
  testEqual(10);

 /*  Utilice el operador de igualdad estricta en la ifinstrucción para que la
   función devuelva la cadena Equalcuando valsea estrictamente igual a 7. */

  function testStrict(val) {
    if (val === 7) {
      return "Equal";
    }
    return "Not Equal";
  }
  testStrict(10);