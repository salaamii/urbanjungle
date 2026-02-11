const cartIndicator = document.querySelector(".cart-amount-container");
const cartHouse = document.getElementById("cart-house");
const removeCart = document.getElementById("close-cart");
const cartContainer = document.getElementById("cart-items-container");



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

       console.log (cart);
        updateCart();

      

        const originaLogo = button.className;

         button.disabled = true;

        button.classList.remove("fa-cart-shopping");
        button.classList.add("fa-circle-check");
        button.style.color = "#08aa29";

        

       setTimeout (() => {
            button.disabled = false;
            button.classList.add("fa-cart-shopping");
            button.classList.remove("fa-circle-check");
            
             button.style.color = "";

           
        }, 1500);

    });
});


function updateCart() {

   
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


                                <p>$${product.price}</p>
                                
                            </div>

                           
                    </div>    

                     <div class="quantity-controls">
                                    <button class="decrease" data-id="${product.id}">-</button>
                                    <span>${product.quantity}</span>
                                    <button class="increase" data-id="${product.id}">+</button>
                                </div>
                    
                    <div class="delete"><i class="fa-solid fa-xmark" style="color: #c4c4c5; cursor: pointer;" data-id="${product.id}"></i></div>
        
        `;

        cartContainer.append(item);
    });

    
    updateIndicator();
    updateTotal();
};

// FUnction to update cart items

function updateIndicator() {

    const indicator = document.getElementById ("cart-counter");

    const totalQuantity = cart.reduce((sum, item) => {
        return sum +item.quantity;
    }, 0);

     indicator.style.padding = "1px";
    indicator.textContent = totalQuantity;

   
}

// delete product from cart, increase or decrease product quantity

cartContainer.addEventListener("click", (e) => {

    const id = e.target.dataset.id;

    if (e.target.classList.contains("fa-xmark")) {
        const deleteId = e.target.dataset.id;
        cart = cart.filter(item => item.id !== deleteId);
        updateCart();
        
    } else if (e.target.classList.contains("increase")) {

        const product = cart.find(item => item.id === id);

        if (product) {
            product.quantity +=1;
            updateCart();
        };

    } else if (e.target.classList.contains("decrease")) {
        const product = cart.find(item => item.id === id);

        if (product) {
            product.quantity -=1;

            if (product.quantity <=0) {
                cart = cart.filter(item =>item.id !== id);
            }

            updateCart();
        }
    }
});


// update subTotal price in the cart

const subtitle = document.getElementById("sub-title");
const priceTotal = document.getElementById("price-subtotal");

subtitle.textContent = "Sub-total";
priceTotal.textContent = "$0.00";


function updateTotal () {

const total = cart.reduce((sum, item) => {

    return sum + item.price * item.quantity;
}, 0)

priceTotal.textContent = `$${total.toFixed(2)}`;

}



