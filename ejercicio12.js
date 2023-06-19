/* 1-golfScore(4, 1)debe devolver la cadenaHole-in-one!
2-golfScore(4, 2)debe devolver la cadenaEagle
3-golfScore(5, 2)debe devolver la cadenaEagle
4-golfScore(4, 3)debe devolver la cadenaBirdie
5-golfScore(4, 4)debe devolver la cadenaPar
6-golfScore(1, 1)debe devolver la cadenaHole-in-one!
7-golfScore(5, 5)debe devolver la cadenaPar
8-golfScore(4, 5)debe devolver la cadenaBogey
9-golfScore(4, 6)debe devolver la cadenaDouble Bogey
10-golfScore(4, 7)debe devolver la cadenaGo Home!
11-golfScore(5, 9)debe devolver la cadenaGo Home! */

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
if (strokes === 1){
  return names[0]
}else if(strokes <= par - 2){
  return names[1]
}else if(strokes === par - 1){
  return names[2]
}else if(strokes === par){
  return names[3]
}else if(strokes === par + 1){
  return names[4]
}else if(strokes === par + 2){
  return names[5]
}
else {
  return names[6]
}
}

golfScore(5, 4);