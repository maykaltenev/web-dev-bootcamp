function greet() {
    console.log('hello');
}
function bye() {
    console.log('goodbye');
}
let hello = document.querySelector('#hello');
let goodbye = document.querySelector('#goodbye');
hello.addEventListener('click', greet);
goodbye.addEventListener('click', bye);