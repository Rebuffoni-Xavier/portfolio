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


// Photo Carousel //

let currentIndex = 0;

function showSlide(index) {
    const wrapper = document.querySelector('.carouselphoto_items');
    const itemWidth = document.querySelector('.carouselphoto_items--slide').offsetWidth;
    currentIndex = index;

    wrapper.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    updateDots();
    updateButtonVisibility();
}

function nextSlide() {
    const totalItems = document.querySelectorAll('.carouselphoto_items--slide').length;
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
}

function prevSlide() {
    const totalItems = document.querySelectorAll('.carouselphoto_items--slide').length;
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(currentIndex);
}

function createDots() {
    const totalItems = document.querySelectorAll('.carouselphoto_items--slide').length;
    const dotsContainer = document.querySelector('.carouselphoto_dots');

    for (let i = 0; i < totalItems; i++) {
      const dot = document.createElement('div');
      dot.classList.add('photodot');
      dot.addEventListener('click', () => showSlide(i));
      dotsContainer.appendChild(dot);
    }

    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.photodot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
}

function updateButtonVisibility() {
    const prevBtn = document.querySelector('.carouselphoto_prevbutton');
    const nextBtn = document.querySelector('.carouselphoto_nextbutton');
    const totalItems = document.querySelectorAll('.carouselphoto_items--slide').length;

    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === totalItems - 1 ? 'none' : 'block';
}
createDots();
updateButtonVisibility();