let keyboardId = document.querySelector("#keyboard-id")
let display = document.querySelector("p")

let n1 = []
keyboardId.addEventListener("click",(e)=>{
  n1.push(e.target.textContent)
  let number = n1
  console.log(number)
  display.textContent = number
})
