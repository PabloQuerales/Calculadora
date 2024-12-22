let numberButtons = document.querySelectorAll(".number-buttons")
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
    if (e.target.textContent == "+") {
      console.log("funciona")
      console.log(number);
      n1 = []
      displayOperator.textContent = "+"
      console.log(number);
        return n1
    }
    console.log(number);
    
  })
}

