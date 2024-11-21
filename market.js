// Selecting the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Cart logic
let cart = [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.parentElement.querySelector('h3').textContent;
        const productPrice = this.parentElement.querySelector('p').textContent;

        // Add product to cart
        const product = {
            name: productName,
            price: productPrice
        };

        cart.push(product);
        alert(`Added ${productName} to your cart!`);

        // Optionally, you can also update a cart counter here
        console.log(cart); // For debugging purposes, you can replace this with cart display logic
    });
});
