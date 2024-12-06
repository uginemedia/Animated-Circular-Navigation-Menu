let menuToggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
menuToggle.addEventListener("click", e => {
    menuToggle.classList.toggle("active")
    menu.classList.toggle("active")
})