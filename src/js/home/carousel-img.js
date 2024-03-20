fetch('../../../src/json/home/carousel.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
        data.img.forEach(element => {
            const sectionId = element.id;
            const imageURL = element.src;
            const section = document.querySelector('#'+ sectionId);
            section.style.backgroundImage = `url(${imageURL})`;
        });
  })