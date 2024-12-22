let numberButtons = document.querySelectorAll(".number-buttons")
let display = document.querySelector("spam")

let n1 = []
let n2 = []
let result = []


for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click",(e)=>{
    let number = ""  
    n1.push(e.target.textContent)
    for (let i = 0; i < n1.length; i++) {
      number = number + n1[i]
      display.textContent = number
      }
  })
}

