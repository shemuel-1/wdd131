// select the DOM elements for output
const year = document.querySelector('#currentYear');
const date = document.querySelector('#lastModified');

// Get the date using the Date object
const today = new Date();

year.innerHTML = today.getFullYear();
date.innerHTML = document.lastModified;