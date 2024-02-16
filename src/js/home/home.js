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

let currentIndexPhoto = 0;

function showSlidePhoto(index) {
    const wrapperPhoto = document.querySelector('.carouselphoto_items');
    const itemWidthPhoto = document.querySelector('.carouselphoto_items--slide').offsetWidth;
    currentIndexPhoto = index;

    wrapperPhoto.style.transform = `translateX(${-currentIndexPhoto * itemWidthPhoto}px)`;
    updateDotsPhoto();
    updateButtonVisibilityPhoto();
}

function nextSlidePhoto() {
    const totalItemsPhoto = document.querySelectorAll('.carouselphoto_items--slide').length;
    currentIndexPhoto = (currentIndexPhoto + 1) % totalItemsPhoto;
    showSlidePhoto(currentIndexPhoto);
}

function prevSlidePhoto() {
    const totalItemsPhoto = document.querySelectorAll('.carouselphoto_items--slide').length;
    currentIndexPhoto = (currentIndexPhoto - 1 + totalItemsPhoto) % totalItemsPhoto;
    showSlidePhoto(currentIndexPhoto);
}

function createDotsPhoto() {
    const totalItemsPhoto = document.querySelectorAll('.carouselphoto_items--slide').length;
    const dotsContainerPhoto = document.querySelector('.carouselphoto_dots');

    for (let i = 0; i < totalItemsPhoto; i++) {
      const dotPhoto = document.createElement('div');
      dotPhoto.classList.add('photodot');
      dotPhoto.addEventListener('click', () => showSlidePhoto(i));
      dotsContainerPhoto.appendChild(dotPhoto);
    }

    updateDotsPhoto();
}

function updateDotsPhoto() {
    const dotsPhoto = document.querySelectorAll('.photodot');
    dotsPhoto.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndexPhoto);
    });
}

function updateButtonVisibilityPhoto() {
    const prevBtnPhoto = document.querySelector('.carouselphoto_prevbutton');
    const nextBtnPhoto = document.querySelector('.carouselphoto_nextbutton');
    const totalItemsPhoto = document.querySelectorAll('.carouselphoto_items--slide').length;

    prevBtnPhoto.style.display = currentIndexPhoto === 0 ? 'none' : 'block';
    nextBtnPhoto.style.display = currentIndexPhoto === totalItemsPhoto - 1 ? 'none' : 'block';
}
createDotsPhoto();
updateButtonVisibilityPhoto();


// // Video //

let currentIndexVideo = 0;

function showSlideVideo(index) {
    const wrapperVideo = document.querySelector('.carouselvideo_items');
    const itemWidthVideo = document.querySelector('.carouselvideo_items--slide').offsetWidth;
    currentIndexVideo = index;

    wrapperVideo.style.transform = `translateX(${-currentIndexVideo * itemWidthVideo}px)`;
    updateDotsVideo();
    updateButtonVisibilityVideo();
}

function nextSlideVideo() {
    const totalItemsVideo = document.querySelectorAll('.carouselvideo_items--slide').length;
    currentIndexVideo = (currentIndexVideo + 1) % totalItemsVideo;
    showSlideVideo(currentIndexVideo);
}

function prevSlideVideo() {
    const totalItemsVideo = document.querySelectorAll('.carouselvideo_items--slide').length;
    currentIndexVideo = (currentIndexVideo - 1 + totalItemsVideo) % totalItemsVideo;
    showSlideVideo(currentIndexVideo);
}

function createDotsVideo() {
    const totalItemsVideo = document.querySelectorAll('.carouselvideo_items--slide').length;
    const dotsContainerVideo = document.querySelector('.carouselvideo_dots');

    for (let i = 0; i < totalItemsVideo; i++) {
      const dotVideo = document.createElement('div');
      dotVideo.classList.add('videodot');
      dotVideo.addEventListener('click', () => showSlideVideo(i));
      dotsContainerVideo.appendChild(dotVideo);
    }

    updateDotsVideo();
}

function updateDotsVideo() {
    const dotsVideo = document.querySelectorAll('.videodot');
    dotsVideo.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndexVideo);
    });
}

function updateButtonVisibilityVideo() {
    const prevBtnVideo = document.querySelector('.carouselvideo_prevbutton');
    const nextBtnVideo = document.querySelector('.carouselvideo_nextbutton');
    const totalItemsVideo = document.querySelectorAll('.carouselvideo_items--slide').length;

    prevBtnVideo.style.display = currentIndexVideo === 0 ? 'none' : 'block';
    nextBtnVideo.style.display = currentIndexVideo === totalItemsVideo - 1 ? 'none' : 'block';
}
createDotsVideo();
updateButtonVisibilityVideo();