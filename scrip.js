let numberButtons = document.querySelectorAll(".number-buttons")
let operatorButtons = document.querySelectorAll(".operator-button")
let displayNumber = document.querySelector(".display-number")
let displayOperator = document.querySelector(".display-operator")

let n1 = []
let n2 = []
let result = n1 + n2


for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click",(e)=>{
    let number = ""  
    n1.push(e.target.textContent)
    for (let i = 0; i < n1.length; i++) {
      number = number + n1[i]
      displayNumber.textContent = number
    }
    for (let i = 0; i < operatorButtons.length; i++){
      operatorButtons[i].addEventListener("click", (e)=>{
        if (e.target.textContent == "+") {
          n1 = []          
          number= 0
          displayOperator.textContent = e.target.textContent
        }
        if(e.target.textContent == "-"){
          displayOperator.textContent = e.target.textContent
        }
          if(e.target.textContent == "*"){
          displayOperator.textContent = e.target.textContent
        }
          if(e.target.textContent == "%"){
          displayOperator.textContent = e.target.textContent
        }
      })
    }      
  })
}
