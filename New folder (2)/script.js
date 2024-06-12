

const products = document.querySelectorAll('.product');

products.forEach(product => {
    product.addEventListener('mouseover', () => {
        product.classList.add('hovered');
    });

    product.addEventListener('mouseout', () => {
        product.classList.remove('hovered');
    });
});