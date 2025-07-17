const hamButton = document.querySelector('#menu-toggle');
const nav = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    nav.classList.toggle('show');
    hamButton.classList.toggle('show');
})

