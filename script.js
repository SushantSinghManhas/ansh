const redlight = document.querySelector('.red');
const yellowlight = document.querySelector('.yellow');
const greenlight = document.querySelector('.green');

function changeLights() {
    setTimeout(() => {
        redlight.style.backgroundColor = 'red';
        yellowlight.style.backgroundColor = 'transparent';
        greenlight.style.backgroundColor = 'transparent';

        setTimeout(() => {

            redlight.style.backgroundColor = 'transparent';
            yellowlight.style.backgroundColor = 'yellow';
            greenlight.style.backgroundColor = 'transparent';

            setTimeout(() => {
                redlight.style.backgroundColor = 'transparent';
                yellowlight.style.backgroundColor = 'transparent';
                greenlight.style.backgroundColor = 'green';

                changeLights();
            }, 2000);
        }, 1000);
    }, 2000);
}
changeLights();