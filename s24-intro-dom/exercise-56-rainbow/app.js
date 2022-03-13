let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let spans = document.querySelectorAll('span');

for (let i = 0; i < spans.length; i++) {
    for (let j = 0; j < colors.length; j++) {
        span.style.color = colors[i];
    }
}