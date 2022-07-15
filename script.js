const hamburger = document.querySelector("#ham_burger");
const cross = document.querySelector(".mobile_menu p");
const mobileMenu = document.querySelector(".mobile_menu");


hamburger.addEventListener("click",()=>{
    mobileMenu.style.display = "block";
    mobileMenu.style.width = "70%"
})

cross.addEventListener("click",()=>{
    mobileMenu.style.width = "0%"
    mobileMenu.style.display = "none";
})