fetch('../../../src/json/photography/fullscreen/flowers.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
        data.sections.forEach(element => {
          const sectionId = element.id;
          const imageURL = element.image;
          const section = document.getElementById(sectionId);
          section.style.backgroundImage = `url(${imageURL})`;
        });
  });