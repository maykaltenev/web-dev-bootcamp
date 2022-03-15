const form = document.querySelector('form');
const basket = document.querySelector('#list'); form.addEventListener('submit', function (e) {
    e.preventDefault();
    const productInput = form.elements.product;
    const quantityInput = form.elements.qty;
    addProduct(productInput.value, quantityInput.value);
    productInput.value = '';
    quantityInput.value = '';

});
const addProduct = (productInput, quantityInput) => {
    const newProduct = document.createElement('li');
    newProduct.append(quantityInput);
    newProduct.append(` ${productInput}`);
    basket.append(newProduct);
}