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


// Home Button //
document.addEventListener('DOMContentLoaded', function () {
  var photobutton = document.getElementById('photobutton');
  var photovisible = document.getElementById('photohow');

  photobutton.addEventListener('click', function () {
      // Toggle the 'hidden' class on the #visible div
      photovisible.classList.toggle('visible');
      photobutton.classList.toggle('clicked');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var videobutton = document.getElementById('videobutton');
  var videovisible = document.getElementById('videohow');

  videobutton.addEventListener('click', function () {
      // Toggle the 'hidden' class on the #visible div
      videovisible.classList.toggle('visible');
      videobutton.classList.toggle('clicked');
  });
});