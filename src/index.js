import './style.css';

if (process.env.NODE_ENV !== 'production') {
    console.log("We appear to be running in a development environment");
}

// Calling the selectors
const home_button = document.querySelector('#home_button');
const menu_button = document.querySelector('#menu_button');
const about_button = document.querySelector('#about_button');

const home_container = document.querySelector('#home_container');
const menu_container = document.querySelector('#menu_container');
const about_container = document.querySelector('#about_container');

const container_list = document.querySelectorAll('[type="container"]');

// Defining the functions
function showOrHide(event) {
    hideAll(); // Hide all the containers

    switch(event.target.id) {
        case "home_button":
            console.log('Showing home container');
            home_container.classList.remove('none');
            break;
        case "menu_button":
            console.log('Showing menu container');
            menu_container.classList.remove('none');
            break;
        case "about_button":
            console.log('Showing about container');
            about_container.classList.remove('none');
            break;
        default:
            console.log('Something went wrong');
            break;
    }
}

function hideAll() {
    console.log('Hiding all');
    for (let container of container_list) {
        if (!container.classList.contains('none')) {
            container.classList.add('none');
        }
    }
}


// Adding the event listeners
home_button.addEventListener('click', showOrHide);
menu_button.addEventListener('click', showOrHide);
about_button.addEventListener('click', showOrHide);


