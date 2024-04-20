const select = document.querySelector('#theme'); // Added '#' to target by ID
const html = document.querySelector('html');

select.addEventListener('change', function() {
    update(select.value);
});

function update(theme) {
    switch (theme) {
        case 'white':
            html.style.backgroundColor = 'white';
            html.style.color = 'black';
            break;
        case 'black':
            html.style.backgroundColor = 'black';
            html.style.color = 'white';
            break;
        case 'purple':
            html.style.backgroundColor = 'purple';
            html.style.color = 'white';
            break;
        case 'yellow':
            html.style.backgroundColor = 'yellow';
            html.style.color = 'black';
            break;
        case 'psychedelic':
            html.style.backgroundColor = 'pink';
            html.style.color = 'lime';
            break;
        default:
            break;
    }
}; 