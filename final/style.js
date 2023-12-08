document.addEventListener('DOMContentLoaded', function () {
    const imageRow = document.querySelector('.carousel-image-row');
    const images = document.querySelectorAll('.carousel-image');
    const prevButton = document.getElementById('button-previous');
    const nextButton = document.getElementById('button-next');

    let currentIndex = 0;

    function updateCarousel() {
        const newPosition = -currentIndex * 33.33 + '%';
        imageRow.style.transform = 'translateX(' + newPosition + ')';
    }

    function shiftRight() {
        currentIndex = (currentIndex + 1) % (images.length / 3);
        updateCarousel();
    }

    function shiftLeft() {
        currentIndex = (currentIndex - 1 + images.length / 3) % (images.length / 3);
        updateCarousel();
    }

    // Set up event listeners
    nextButton.addEventListener('click', shiftRight);
    prevButton.addEventListener('click', shiftLeft);

    // Auto shift every 3 seconds
    setInterval(shiftRight, 3000);
});