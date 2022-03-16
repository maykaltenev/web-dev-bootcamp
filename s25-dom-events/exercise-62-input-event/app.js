const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', function (e) {
    if (!input.value === '') {
        h1.innerHTML = `Welcome, ${input.value}`;
    } else {
        h1.innerText = 'Enter Your Username';
    }
})