const burGer = document.querySelector(".nav-burger");


burgerStyle.addEventListener("click", function (event)  {
    this.classList.toggle('active')
    nav_ul.classList.toggle("slide")
})

