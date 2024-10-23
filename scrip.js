let keyboardId = document.querySelector("#keyboard-id")

let n1 = []
keyboardId.addEventListener("click",(e)=>{
  n1.push(e.target.textContent)
  return n1
})

keyboardId.addEventListener("click",(e)=>{
  let number = n1
  console.log(number)
})