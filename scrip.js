let num2 = document.getElementById("keyboard-id")

let n1 = []
num2.addEventListener("click",(e)=>{
  n1.push(e.target.textContent)
  return n1
})

num2.addEventListener("click",(e)=>{
  let number = ""
  console.log(number)
})