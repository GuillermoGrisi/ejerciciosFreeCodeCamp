/* Escribe una declaración switch para establecer answer con las siguientes condiciones:
a - apple
b - bird
c - cat
default - stuff */



function switchOfStuff(val) {
    let answer = "";

  switch(val){
  case "a":
  answer = "apple";
  break;
  case "b":
  answer = "bird";
  break;
  case "c":
  answer = "cat";
  break;
  default:
  answer = "stuff"
  }
    return answer;
  }
  switchOfStuff(1);