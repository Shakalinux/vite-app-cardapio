import { calculateTotal } from './cart.js';

export function setupFormSubmission() {
    const form = document.getElementById('order-form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const endereco = document.getElementById('endereco').value;
        const telefone = document.getElementById('telefone').value;
        const total = calculateTotal();


        console.log('--- Pedido Finalizado ---');
        console.log('Nome:', nome);
        console.log('Endereço:', endereco);
        console.log('Telefone:', telefone);
        console.log('Total a pagar:', `R$ ${total}`);
        console.log('--- FIM DO PEDIDO ---');

        alert(`Pedido de R$ ${total} finalizado! `);


        form.reset();
    });
}