const burgerButton = document.querySelector(".burger-button");
const navMenu = document.querySelector(".nav-menu");

burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () =>{
    burgerButton.classList.remove("active");
    navMenu.classList.remove("active");
}))