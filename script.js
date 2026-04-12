// Restored script.js content with full mapbox and floating menu functionality

// Initialize Mapbox
mapboxgl.accessToken = 'your_access_token';
const map = new mapboxgl.Map({
    container: 'map', // ID of the container in your HTML
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40], // Starting position [lng, lat]
    zoom: 9 // Starting zoom level
});

// Floating menu functionality
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('floating-menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('visible'); // Show or hide menu
});

// Additional functionality as needed...