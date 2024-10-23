let keyboardId = document.querySelector(".numbers")
let display = document.querySelector("p")

let n1 = []
let n2 = []
let result = []

keyboardId.addEventListener("click",(e)=>{
  n1.push(e.target.textContent)
  let number = n1
  display.textContent = number
  concatenar()
})
function concatenar () {
  for (let i = 0; i < n1.length; i++) {
    console.log("HolaMundo")
  }
}
