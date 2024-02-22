// Home Carousel //

let currentIndexPhoto = 0;
let autoSlideInterval;

function showSlidePhoto(index) {
    const wrapperPhoto = document.querySelector('.carouselphoto_items');
    const itemWidthPhoto = document.querySelector('.carouselphoto_items--slide').offsetWidth;
    currentIndexPhoto = index;

    wrapperPhoto.style.transform = `translateX(${-currentIndexPhoto * itemWidthPhoto}px)`;
    updateDotsPhoto();
}

function nextSlidePhoto() {
    const totalItemsPhoto = document.querySelectorAll('.carouselphoto_items--slide').length;
    currentIndexPhoto = (currentIndexPhoto + 1) % totalItemsPhoto;
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

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      nextSlidePhoto();
    }, 5000);
  }

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

createDotsPhoto();
startAutoSlide();