const select = document.getElementById('theme');

select.addEventListener('change', function() {
    updateBackground(select.value);
});

function updateBackground(theme) {
    const body = document.body;
    let imagePath;

    // Check the selected theme and set the image path accordingly
    if (theme === 'serene') {
        imagePath = 'file:///C:/Users/walkermilhoan/Desktop/Js_100Days/color_switch/Images/img-1.webp';
    } else if (theme === 'bigLake') {
        imagePath = 'file:///C:/Users/walkermilhoan/Desktop/Js_100Days/color_switch/Images/img-2.webp';
    }

    // Set the background image of the body
    body.style.backgroundImage = `url(${imagePath})`;
}

