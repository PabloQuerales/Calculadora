let keyboardId = document.querySelectorAll("button")
let display = document.querySelector("p")

let n1 = []
// let n2 = []
// let result = []
let generatedWord = ""

function sumar(n1,n2) {
  let resultado = n1+n2
  parseInt(resultado)
  return resultado
}
let paso1 = []
let paso2 = ["20","30","20"]
let paso3 = paso2[0]+paso2[1]+paso2[2]
let paso4 = parseInt(paso3)
contador = ""
console.log(sumar(paso4,paso4));
let index = 0
for (let i = 0; i < keyboardId.length; i++) {
  keyboardId[i].addEventListener("click",(e)=>{
    paso1.push(e.target.textContent)
  for (let index = 0; index < paso1.length; index++) {
    console.log(index)
    contador = contador + paso1[index]
	}
  })
}