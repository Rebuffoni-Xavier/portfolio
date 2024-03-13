const gallery = document.querySelector('.gallery');
const fullscreenBtn = document.getElementById('fullscreen');
const closeBtn = document.getElementById('close');
const content = document.getElementById('carrousel');

fetch('../../../src/json/photography/flower.json')
    .then(response => response.json())
    .then(data => {
       console.log(data);
        data.img.forEach(element => {
            const img = document.createElement('img');
            img.src = element.src;
            img.alt = element.alt;
            img.classList.add('main_img');
            img.addEventListener('click', function() { 
                content.style.display = 'block';
                content.requestFullscreen().catch(err => {
                     console.error('Failed to enter fullscreen mode:', err);
                });
                document.location.href = '#'+ element.id;
            });
            gallery.appendChild(img);
        });
    });

    
// Full Screen //

fullscreenBtn.addEventListener('click', () => {
    content.style.display = 'block';
    content.requestFullscreen().catch(err => {
        console.error('Failed to enter fullscreen mode:', err);
    });
});

closeBtn.addEventListener('click', () => {
    content.style.display = 'none';
    document.exitFullscreen();
});