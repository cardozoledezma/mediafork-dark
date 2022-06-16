const burGer = document.querySelector(".nav-burger");
const navList = document.querySelector(".nav-list");
const changeIcon1 = document.querySelector("fa-chevron-up")
const changeIcon2 = document.querySelector("fa fa-bars")

burGer.addEventListener("click", function (event)  {
    this.classList.toggle('active')
    navList.classList.toggle("active")
    if (this.classList.containte("active")){
        changeIcon1.classList.replace("fa fa-bars, fa-chevron-up")
        
    }
    else{
        changeIcon2.classList.replace('fa-chevron-up, fa fa-bars')

    }



})

let changeIcon = function(icon){
    icon.classList.toggle('fa-chevron-up')
}


