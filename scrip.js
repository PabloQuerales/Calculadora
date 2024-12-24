let numberButtons = document.querySelectorAll(".number-buttons")
let operatorButton = document.querySelectorAll(".operator-button")
let equalButton = document.querySelector(".equal-button")
let displayNumber = document.querySelector(".display-number")
let displayOperator = document.querySelector(".display-operator")
let displaySimbolOperator = document.querySelector(".display-simbol-operator")

let n1 = []

function resetDisplay (){
  displayOperator.textContent = ""
  displaySimbolOperator.textContent = ""
  n1 = []
} 
function resetCounter(){
  displayOperator.textContent = displayNumber.textContent
  displayNumber.textContent = "0"
  n1 = []
}

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

for (let i = 0; i < operatorButton.length; i++) {
  operatorButton[i].addEventListener("click", (e)=>{
    displaySimbolOperator.textContent= operatorButton[i].textContent
    if(operatorButton[i].textContent == "+"){
      if (displayOperator.textContent == "") {
        resetCounter()
        equalButton.addEventListener("click", ()=>{
          displayNumber.textContent = Number(displayOperator.textContent)+Number(displayNumber.textContent)
          resetDisplay()
        })        
      } else {
          displaySimbolOperator.textContent = e.target.textContent
          displayOperator.textContent = Number(displayOperator.textContent)+Number(displayNumber.textContent)
          resetCounter()
      }
    }
    if(operatorButton[i].textContent == "-"){
      if (displayOperator.textContent == "") {
        displayOperator.textContent = displayNumber.textContent
        resetCounter()
        equalButton.addEventListener("click", ()=>{
          displayNumber.textContent = Number(displayOperator.textContent)-Number(displayNumber.textContent)
          resetDisplay()
        })        
      } else {
          displaySimbolOperator.textContent = e.target.textContent
          displayOperator.textContent = Number(displayOperator.textContent)-Number(displayNumber.textContent)
          resetCounter()
      }
    }
    if(operatorButton[i].textContent == "*"){
      if (displayOperator.textContent == "") {
        displayOperator.textContent = displayNumber.textContent
        resetCounter()
        equalButton.addEventListener("click", ()=>{
          displayNumber.textContent = Number(displayOperator.textContent)*Number(displayNumber.textContent)
          resetDisplay()
        })        
      } else {
          displaySimbolOperator.textContent = e.target.textContent
          displayOperator.textContent = Number(displayOperator.textContent)*Number(displayNumber.textContent)
          resetCounter()
      }
    }
    if(operatorButton[i].textContent == "/"){
      if (displayOperator.textContent == "") {
        displayOperator.textContent = displayNumber.textContent
        resetCounter()
        equalButton.addEventListener("click", ()=>{
          displayNumber.textContent = Number(displayOperator.textContent)/Number(displayNumber.textContent)
          resetDisplay()
        })        
      } else {
          displaySimbolOperator.textContent = e.target.textContent
          displayOperator.textContent = Number(displayOperator.textContent)/Number(displayNumber.textContent)
          resetCounter()
      }
    }
  })
}