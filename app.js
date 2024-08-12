const block = document.querySelector("#block")
const input = document.getElementsByTagName("input")
const btn  = document.getElementById("btn")
btn.addEventListener("click" , () => {
    block.innerHTML += `<li>${input[0].value}</li>
    `
})
const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", ()=> {
    block.innerHTML = " "
})
