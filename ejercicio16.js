/* En el juego de casino Blackjack, un jugador puede determinar si tiene una ventaja en la 
siguiente mano sobre la casa llevando la cuenta del número relativo de cartas altas y bajas 
que quedan en la baraja. Esto se llama cuenta de tarjetas.
Tener más cartas altas en la baraja es una ventaja para el jugador. Se le asigna un valor a cada carta 
de acuerdo a la siguiente tabla. Cuando el conteo es positivo, el jugador debería apostar alto. 
Cuando el conteo da 0 o negativo, el jugador debería apostar bajo.
CONTEO DE CARTAS
+1 --	2, 3, 4, 5, 6
 0 --   7, 8, 9
-1 -- 	10, 'J', 'Q', 'K', 'A'
Escribirás una función para contar cartas. Recibirá un parámetro card (carta) que puede ser un número o una 
cadena y aumentar o reducir la variable global count (conteo) de acuerdo al valor de la carta (observa la tabla). 
La función devolverá una cadena con el conteo actual y la cadena Bet (Apuesta) si el conteo es positivo, 
o Hold (Espera) si el conteo es cero o negativo. El conteo actual y la decisión del jugador (Bet o Hold)
 deben estar separados por un solo espacio.

Resultados de ejemplo: -3 Hold o 5 Bet */

let count = 0;

function cc(card) {
switch(card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
  break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count--;
}
if(count > 0){
  return count + " Bet"
}else {
  return count + " Hold"
}
}

cc(2); cc(3); cc(7); cc('K'); cc('A');