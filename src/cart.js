let cart = [];


export function removeItemFromCart(itemId) {
    const  ifItemExists = cart.find(item => item.id === item.id);
    if (ifItemExists) {
       if(ifItemExists.quantity > 1) {
           ifItemExists.quantity--;
       }else{
           cart = cart.filter(item => item.id !== itemId);
       }
    }
    updateCartUI();
    console.log('Item removido. Carrinho atual:', cart);

}

export function addItemToCart(item, quantity = 1) {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...item, quantity });
    }
    updateCartUI();
    console.log('Carrinho atualizado:', cart);
}


export function calculateTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return total.toFixed(2);
}



function updateCartUI() {
    const cartContainer = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total-price');

    if (!cartContainer || !totalSpan) return;

    cartContainer.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        itemElement.innerHTML = `
            <div>
                ${item.name} x ${item.quantity}
            </div>
            <div class="d-flex align-items-center">
                <span class="badge bg-primary rounded-pill me-2">R$ ${(item.price * item.quantity).toFixed(2)}</span>
                <button class="btn btn-danger btn-sm remove-item-btn" data-item-id="${item.id}">
                    &times; </button>
            </div>
        `;
        cartContainer.appendChild(itemElement);
    });

    totalSpan.textContent = `R$ ${calculateTotal()}`;

    document.querySelectorAll('.remove-item-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const itemId = event.target.dataset.itemId;
            removeItemFromCart(itemId);
        });
    });
}