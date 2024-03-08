const gallery = document.querySelector('.gallery');
fetch('../../../src/json/photography/landscape.json')
    .then(response => response.json())
    .then(data => {
       console.log(data);
        data.img.forEach(element => {
            const img = document.createElement('img');
            img.src = element.src;
            img.alt = element.alt;
            img.classList.add('main_img');
            img.addEventListener('click', function() { 
                document.getElementById('carrousel').style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
            gallery.appendChild(img);
        });
    });


// Full Screen //

document.getElementById('fullscreen').addEventListener('click', function() {
        document.getElementById('carrousel').style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
      
document.getElementById('close').addEventListener('click', function() {
        document.getElementById('carrousel').style.display = 'none';
        document.body.style.overflow = 'auto';
    });