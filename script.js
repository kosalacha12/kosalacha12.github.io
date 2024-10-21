// Example: Toggle mobile navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector('.nav-toggle'); // Add a button for mobile toggle
    const nav = document.querySelector('nav ul');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Example: Alert when an image is clicked
    const images = document.querySelectorAll('.image-placeholder img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            alert('You clicked on ' + img.alt);
        });
    });
});
