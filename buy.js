document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const item = e.target.closest('.buy-item');
            const itemName = item.querySelector('h3').innerText;
            const itemPrice = parseFloat(item.querySelector('span').innerText.replace('$', ''));

            // Add item to the cart
            const cartItem = document.createElement('li');
            cartItem.innerText = `${itemName} - $${itemPrice.toFixed(2)}`;
            cartItemsContainer.appendChild(cartItem);

            // Update total price
            totalPrice += itemPrice;
            totalPriceElement.innerText = totalPrice.toFixed(2);
        });
    });
});