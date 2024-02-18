let menuButton = document.querySelector("#menu")
let cancelButton = document.querySelector("#cancel")
let hamburger = document.querySelector("#hamburger")

console.log(menuButton)
console.log(cancelButton)
console.log(hamburger)

menuButton.addEventListener("click",()=>
{
    console.log("menuButton clicked")
    menuButton.classList.toggle("hidden")
    cancelButton.classList.toggle("hidden")
    hamburger.classList.toggle("hidden")
})


cancelButton.addEventListener("click",()=>
{
    console.log("menuButton clicked")

    cancelButton.classList.toggle("hidden")
    menuButton.classList.toggle("hidden")
    hamburger.classList.toggle("hidden")
})





