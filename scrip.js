let keyboardId = document.querySelectorAll("button")
let display = document.querySelector("p")

let n1 = []
// let n2 = []
// let result = []

for (let i = 0; i < keyboardId.length; i++) {
  keyboardId[i].addEventListener("click",(e)=>{
    n1.push(e.target.textContent)
    display.textContent = n1
    console.log(n1)
    console.log("hola")
    // if (condition) {
    // }
    // concatenar()
  })
}
// function concatenar () {
//   for (let i = 0; i < n1.length; i++) {
//     console.log(n1[0]+n1[1]+n1[2]+n1[3])
//   }
// }

