const cartIndicator = document.getElementById("cart-logo");
const cartHouse = document.getElementById("cart-house");
const removeCart = document.getElementById("close-cart");

cartIndicator.addEventListener("click" , () => {
    cartHouse.classList.add ("cart-display");
});

removeCart.addEventListener("click", () => {
    cartHouse.classList.remove ("cart-display");
});


