const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Save cart items to localStorage
    function saveCart() {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    // Loop through all the "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.card');
            const productName = card.getAttribute('data-name');
            const productPrice = parseFloat(card.getAttribute('data-price'));
            const productImage = card.querySelector('img').src;  // Get the image src

            // Push the product details (name, price, image) to cart
            cartItems.push({ name: productName, price: productPrice, image: productImage });
            saveCart();
            alert(`${productName} added to cart!`);
        });
    });

    // Update cart display
    function updateCartDisplay() {
        const cartContainer = document.querySelector('#cart-items');
        const totalPriceElement = document.querySelector('.total-price');
        
        cartContainer.innerHTML = '';
        if (cartItems.length === 0) {
            cartContainer.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
        } else {
            cartItems.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <p>${item.name}</p>
                        <p>Price: ₹${item.price}</p>
                    </div>
                    <button class="remove-button" data-index="${index}">Remove</button>
                `;
                cartContainer.appendChild(cartItem);
            });

            // Event listener for removing items from cart
            document.querySelectorAll('.remove-button').forEach(button => {
                button.addEventListener('click', (event) => {
                    const index = event.target.getAttribute('data-index');
                    removeItemFromCart(index);
                });
            });
        }

        // Calculate total price
        const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
        totalPriceElement.textContent = `Total: ₹${totalPrice}`;
    }

    // Remove item from cart
    function removeItemFromCart(index) {
        cartItems.splice(index, 1);
        saveCart();
        updateCartDisplay();
    }

    // Initial call to display the cart
    updateCartDisplay();

