/* Cree una ifdeclaración dentro de la función para devolver Yes, that was 
truesi el parámetro wasThatTruees truey devolver No, that was falseen caso contrario. */

function trueOrFalse(wasThatTrue) {
  if(wasThatTrue){
    return "Yes, that was true"
  }
  return "No, that was false"
  }
  trueOrFalse(true);
  trueOrFalse(false);