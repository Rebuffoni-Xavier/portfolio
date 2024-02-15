// Home Carousel //

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const carouselDotsContainer = document.getElementById('carouselDots');
    let currentIndex = 0;
    let slideChangeInterval;
    let dotUpdateInterval;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        updateCarousel();
        updateDots();
    }

    function updateCarousel() {
        const translateY = -currentIndex * 165 + 'px';
        carousel.style.transform = 'translateY(' + translateY + ')';
    }

    function updateDots() {
        const dots = Array.from(carouselDotsContainer.children);
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function handleHover(index) {
        currentIndex = index;
        updateCarousel();
        updateDots();
        clearInterval(slideChangeInterval);
        clearInterval(dotUpdateInterval);
    }

    function handleMouseLeave() {
        slideChangeInterval = setInterval(nextSlide, 3000);
        dotUpdateInterval = setInterval(() => {
            updateDots();
        }, 3000);
    }

    function createDots() {
        const slideTexts = ['About Me', 'Photography', 'Video', 'Contact']; // Add more texts as needed
        const targetSections = ['about', 'photography', 'video', 'contact']; // Add more ids as needed
        slideTexts.forEach((text, index) => {
            const dot = document.createElement('a');
            dot.textContent = text;

            // Set the id of the target section as the href
            const targetSectionId = targetSections[index]; // Get the corresponding id
            dot.href = '#' + targetSectionId; // Replace 'targetSectionId' with the actual id

            dot.classList.add('dot');
            dot.addEventListener('mouseenter', () => {
                handleHover(index);
            });
            dot.addEventListener('mouseleave', () => {
                handleMouseLeave();
            });
            carouselDotsContainer.appendChild(dot);
        });
        updateDots();
        handleMouseLeave();
    }

    createDots();
});