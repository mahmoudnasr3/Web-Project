document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    // Event listener for dynamically added "Add to Cart" buttons
    document.querySelector('.buy').addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
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
        }
    });

    const buyTable = document.getElementById('buy-table');
    let items = JSON.parse(localStorage.getItem('menuItems')) || [];

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'buy-item';

        div.innerHTML = `
            <img src="${item.image}">
            <div class="content">
                <h3>${item.name}</h3>
                <span>$${item.price}</span>
                <button class="add-to-cart-btn">Add to Cart</button>
            </div>
        `;

        buyTable.appendChild(div);
    });
});
