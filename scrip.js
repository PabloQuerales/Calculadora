// Función encargada de la SUMA
function sum(impr,impr){
  let result = impr + impr
  return result
}
let output = sum(1,200)
console.log(output)
// Función encargada de la RESTA
function sust(num1,num2){
  let result = num1 - num2
  return result
}
let output1 = sust(1,200)
console.log(output1)
// Función encargada de la MULTIPLICACIÓN
function mult(num1,num2){
  let result = num1 * num2
  return result
}
let output2 = mult(1,200)
console.log(output2)
// Función encargada de la DIVISIÓN
function divi(num1,num2){
  let result = num1 / num2
  return result
}
let output3 = divi(1,200)
console.log(output3)



let num2 = document.getElementById("keyboard-id")
num2.addEventListener("click",impr)
let n1 = ""
function impr (e) {
  n1 = e.target.textContent
  return n1
}

