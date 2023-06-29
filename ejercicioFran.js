/*Given an integer n, return a string array answer (1-indexed) where:
answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.*/
/*
/*Example 1:
Input: n = 3
Output: ["1","2","Fizz"]*/
let n = 12
function example1(n){

    for (let i = 0; i <= n; i++) { 
        
    }
}

example1();


/*Example 2:
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]

Example 3:
Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]*/

//verificar si se puede formar una palabra con la otra

var puedeConstruirse = (desde, constuir) => {
    for (const caracter of desde) {
      console.log(caracter)
      constuir = constuir.replace(caracter, "")
      console.log(constuir)
    }
  
    if (!constuir)
      return true
  
    return false
  }
  
  console.log(puedeConstruirse("hlelrlsfsasadfooh", "hello"))