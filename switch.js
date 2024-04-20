
// Step 1: Declare variables that target the ID's, '#theme', and 'html'.
const select = document.querySelector('#theme');
const html = document.querySelector('html');
const themes = {
    white: { backgroundColor: '#ffffff', textColor: '#000000', name: 'Snow White' },
    black: { backgroundColor: '#000000', textColor: '#ffffff', name: 'Midnight Black' },
    purple: { backgroundColor: '#8a2be2', textColor: '#ffffff', name: 'Royal Purple' },
    yellow: { backgroundColor: '#ffff00', textColor: '#000000', name: 'Sunny Yellow' },
    psychedelic: { backgroundColor: '#ff69b4', textColor: '#00ff00', name: 'Psychedelic Pink & Green' }
};

// Step 2: Add event listener that targets the 'select' element and adds a 'change' event and a function that updates the select feild
select.addEventListener('change', function() {
    update(select.value);
});


// Step 3: Add a function 
function update(theme) {
    const selectedTheme = themes[theme];
    if (selectedTheme) {
        html.style.backgroundColor = selectedTheme.backgroundColor;
        html.style.color = selectedTheme.textColor;
        document.getElementById('theme-name').textContent = selectedTheme.name;
    }
}
