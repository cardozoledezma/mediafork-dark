const burGer = document.querySelector(".nav-burger");
const navList = document.querySelector(".nav-list");
const mobileIcon = document.querySelector("mobile-icon")


burGer.addEventListener("click", function (event)  {
    this.classList.toggle('active')
    navList.classList.toggle("active")
    if(mobileIcon.classList.contains()){}

    
    



})
const text1 = document.querySelector(".text1")
const modalContainer1 = document.querySelector(".modal-container1");
function submitOnClick1() {
    modalContainer1.classList.toggle("active")
    text1.classList.toggle("active")

    

  }
  const text2 = document.querySelector(".text2")
  const modalContainer2 = document.querySelector(".modal-container2");
  function submitOnClick2() {  
    modalContainer2.classList.toggle("active")
    text2.classList.toggle("active")

    

  }
  const text3 = document.querySelector(".text3")
  const modalContainer3 = document.querySelector(".modal-container3");
  function submitOnClick3() {
    modalContainer3.classList.toggle("active")
    text3.classList.toggle("active")

  }
  const text4 = document.querySelector(".text4")
  const modalContainer4 = document.querySelector(".modal-container4");
  function submitOnClick4() {
    modalContainer4.classList.toggle("active")
    text4.classList.toggle("active")

  }









