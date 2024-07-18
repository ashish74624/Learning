document.addEventListener('DOMContentLoaded', function() {
    const parallaxItem = document.querySelector('.parallax-item');

    // Trigger animation when the page is loaded
    setTimeout(function() {
        parallaxItem.classList.add('active');
    }, 100);
});
