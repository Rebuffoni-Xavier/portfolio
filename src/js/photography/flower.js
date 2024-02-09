const gallery = document.querySelector('.gallery');
fetch('../../src/json/photography/flower.json')
    .then(response => response.json())
    .then(data => {
       console.log(data);
        data.img.forEach(element => {
            const img = document.createElement('img');
            img.src = element.src;
            img.alt = element.alt;
            img.classList.add('main_img');
            gallery.appendChild(img);
        });
    });