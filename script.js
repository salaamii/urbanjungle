const cartIndicator = document.querySelector(".cart-amount-container");
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


// ADD TO CART FUNCTIONALITY

const buttons = document.querySelectorAll(".add-to-cart");

let cart = [];

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const productEl = button.closest(".product-container");

        const id = productEl.dataset.id;
        const name = productEl.dataset.name;
        const price = Number(productEl.dataset.price);
       const image = productEl.dataset.image;

       // check if product already exists

       const existingProduct = cart.find(item => item.id === id);

       if (existingProduct) {
        existingProduct.quantity += 1;

       } else {

            cart.push({
                id,
                name,
                price,
                image,
                quantity: 1
            });

           
       }

        updateCart();
    });
});


function updateCart() {

    const cartContainer = document.getElementById ("cart-items-container");
    cartContainer.innerHTML = "";

    cart.forEach(product => {
        const item = document.createElement("div");
        item.classList.add("item-container");

        const itemTotal = product.price * product.quantity;

        item.innerHTML = `    

                    <div class="img-details">
                            <div class="checkout-img img-container"><img src="${product.image}" alt=""></div>

                            <div class="item-details">
                                <p id="product-name">${product.name}</p>
                                <p>${product.quantity} x $${product.price}</p>
                                
                            </div>
                    </div>    
                    
                    <div class="delete"><i class="fa-solid fa-xmark" style="color: #c4c4c5;"></i></div>
        
        `;

        cartContainer.append(item);
    });

    
    updateIndicator();
};

function updateIndicator() {

    const indicator = document.getElementById ("cart-counter");

    const totalQuantity = cart.reduce((sum, item) => {
        return sum +item.quantity;
    }, 0);

     indicator.style.padding = "1px";
    indicator.textContent = totalQuantity;

   
}




