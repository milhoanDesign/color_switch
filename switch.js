
/*
1. **Starting with the HTML Elements**:
    - There is an HTML select element with the ID 'theme'. This element allows users to choose between different theme options.
    - The HTML document root (**`<html>`**) is targeted to dynamically change its appearance based on the selected theme.
*/
const select = document.querySelector('#theme');
const html = document.querySelector('html');

/*
2. **Themes Object**:
    - A JavaScript object named **`themes`** is defined, holding multiple theme options such as 'white', 'black', 'purple', 'yellow', and 'psychedelic'. Each theme is described by properties including **`backgroundColor`**, **`textColor`**, and a human-friendly **`name`**.
*/

const themes = {
    white: { backgroundColor: '#ffffff', textColor: '#000000', name: 'Snow White' },
    black: { backgroundColor: '#000000', textColor: '#ffffff', name: 'Midnight Black' },
    purple: { backgroundColor: '#8a2be2', textColor: '#ffffff', name: 'Royal Purple' },
    yellow: { backgroundColor: '#ffff00', textColor: '#000000', name: 'Sunny Yellow' },
    psychedelic: { backgroundColor: '#ff69b4', textColor: '#00ff00', name: 'Psychedelic Pink & Green' }
};

/*
3. **Event Listener**:
    - An event listener is added to the 'select' element, which triggers a function when the user changes the selected option (a 'change' event).
*/ 
select.addEventListener('change', function() {
    update(select.value);
});


/*
4. **Update Function**:
    - The **`update`** function is triggered by the 'change' event. This function:
        - Retrieves the selected theme based on the value of the select element.
        - Checks if the selected theme exists in the **`themes`** object.
        - Applies the **`backgroundColor`** and **`textColor`** of the selected theme to the **`<html>`** element.
        - Updates the text content of an element with the ID 'theme-name' to display the name of the selected theme.
*/

function update(theme) {
    const selectedTheme = themes[theme];
    if (selectedTheme) {
        html.style.backgroundColor = selectedTheme.backgroundColor;
        html.style.color = selectedTheme.textColor;
        document.getElementById('theme-name').textContent = selectedTheme.name;
    }
}
