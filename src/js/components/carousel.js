let currentIndex = 0;

  function showSlide(index) {
    const wrapper = document.querySelector('.carousel-wrapper');
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    currentIndex = index;

    wrapper.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    updateDots();
    updateButtonVisibility();
  }

  function nextSlide() {
    const totalItems = document.querySelectorAll('.carousel-item').length;
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
  }

  function prevSlide() {
    const totalItems = document.querySelectorAll('.carousel-item').length;
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(currentIndex);
  }

  function createDots() {
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const dotsContainer = document.querySelector('.carousel-dots');

    for (let i = 0; i < totalItems; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.addEventListener('click', () => showSlide(i));
      dotsContainer.appendChild(dot);
    }

    updateDots();
  }

  function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  function updateButtonVisibility() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const totalItems = document.querySelectorAll('.carousel-item').length;

    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === totalItems - 1 ? 'none' : 'block';
  }

  // Initialize dots and button visibility
  createDots();
  updateButtonVisibility();