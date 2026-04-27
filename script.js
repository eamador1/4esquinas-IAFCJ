const images = [
  {
    id: '1',
    image:'img/jesucristo.png',
  },
    
  {
    id: '2',
    image:'img/bautismo.png',
  },

  {
    id: '3',
    image:'img/santidad.png',
  }
];

const principios = document.querySelector('.principios');

images.forEach((image) => {
  const img = document.createElement('img');
  
  img.classList.add('principio');

  img.src = image.image;

  principios.appendChild(img);
});