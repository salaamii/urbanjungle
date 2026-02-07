const cartIndicator = document.getElementById("cart-logo");
const cartHouse = document.getElementById("cart-house");
const removeCart = document.getElementById("close-cart");


cartIndicator.addEventListener("click" , () => {
    cartHouse.classList.add ("cart-display");
});

removeCart.addEventListener("click", () => {
    cartHouse.classList.remove ("cart-display");
});


const navbar = document.getElementById("close-nav");
const navList = document.getElementById("nav-list");

navbar.addEventListener("click" , () => {
    navList.classList.toggle ("nav-display");

    if (navList.classList.contains("nav-display")) {
         navbar.innerHTML = `<i class="fa-solid fa-xmark fa-2xl" style="color: #ffffff;">`;

    } else {
        navbar.innerHTML = `<i class="fa-solid fa-bars fa-2xl" style="color: #ffffff;"></i>`;
    }
   
});


