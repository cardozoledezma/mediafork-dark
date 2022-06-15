const burGer = document.querySelector("#nav-burger");
const burgerStyle = document.querySelector("#nav-list")

burgerStyle.addEventListener("click", () => {
    burgerStyle.classList.toggle('active')
    burGer.classList.toggle('active')



})