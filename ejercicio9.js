/* Agregue el operador mayor que a las líneas indicadas para que las declaraciones de retorno tengan sentido. */

function testGreaterThan(val) {
    if (val > 100) { 
      return "Over 100";
    }
    if (val > 10) { 
      return "Over 10";
    }
    return "10 or Under";
  }
  testGreaterThan(10);

  /* Agregue el operador mayor que o igual a las líneas indicadas para que las declaraciones de retorno tengan sentido. */

  function testGreaterOrEqual(val) {
    if (val >= 20) {  
      return "20 or Over";
    }
    if (val >=10) {
      return "10 or Over";
    }
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);