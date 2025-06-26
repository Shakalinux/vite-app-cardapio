import { addItemToCart } from './cart.js';

export function renderMenuItems(allItems, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`O contêiner com o ID '${containerId}' não foi encontrado.`);
        return;
    }

    container.innerHTML = '';


    allItems.forEach(item => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col');

        colDiv.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${item.image}" class="card-img-top" alt="${item.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description || ''}</p>
                </div>
                <div class="card-footer d-flex justify-content-between align-items-center">
                    <span class="fw-bold fs-5">R$ ${item.price.toFixed(2)}</span>
                    <button class="btn btn-success btn-sm add-to-cart-btn" data-item-id="${item.id}">
                        Adicionar
                    </button>
                </div>
            </div>
        `;

        container.appendChild(colDiv);
    });


    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const itemId = event.target.dataset.itemId;

            const itemToAdd = allItems.find(item => item.id === itemId);

            if (itemToAdd) {
                addItemToCart(itemToAdd);
            } else {
                console.error(`Item com ID ${itemId} não encontrado.`);
            }
        });
    });
}