let numberButtons = document.querySelectorAll(".number-buttons")
let additionButton = document.querySelector(".addition-button")
let subtractionButton = document.querySelector(".subtraction-button")
let multiplicationButton = document.querySelector(".multiplication-button")
let divisionButton = document.querySelector(".division-button")
let equalButton = document.querySelector(".equal-button")
let displayNumber = document.querySelector(".display-number")
let displayOperator = document.querySelector(".display-operator")
let displaySimbolOperator = document.querySelector(".display-simbol-operator")

let n1 = []
let n2 = []

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click",(e)=>{
    let number = ""  
    n1.push(e.target.textContent)
    for (let i = 0; i < n1.length; i++) {
      number = number + n1[i]
      displayNumber.textContent = number
    }
  })
}
// FUNCION DE SUMAR
additionButton.addEventListener("click", (e)=>{
  if(displayOperator.textContent == ""){
    displaySimbolOperator.textContent = e.target.textContent
    displayOperator.textContent = displayNumber.textContent
    displayNumber.textContent = "0"
    n1 = []
    equalButton.addEventListener("click", ()=>{
      displayNumber.textContent = Number(displayOperator.textContent)+Number(displayNumber.textContent)
      displayOperator.textContent = ""
      displaySimbolOperator.textContent = ""
      n1 = []
    })
  } else {
      displaySimbolOperator.textContent = e.target.textContent
      displayOperator.textContent = Number(displayOperator.textContent)+Number(displayNumber.textContent)
      displayNumber.textContent = "0"
      n1 = []
  }
  })   
// FUNCION DE RESTAR
subtractionButton.addEventListener("click", (e)=>{
  if(displayOperator.textContent == ""){
    displaySimbolOperator.textContent = e.target.textContent
    displayOperator.textContent = displayNumber.textContent
    displayNumber.textContent = "0"
    n1 = []
    equalButton.addEventListener("click", ()=>{
      displayNumber.textContent = Number(displayOperator.textContent)-Number(displayNumber.textContent)
      displayOperator.textContent = ""
      displaySimbolOperator.textContent = ""
      n1 = []
    })
  } else {
      displaySimbolOperator.textContent = e.target.textContent
      displayOperator.textContent = Number(displayOperator.textContent)-Number(displayNumber.textContent)
      displayNumber.textContent = "0"
      n1 = []
  }
})