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

  const principio_container = document.createElement('div');

  const img = document.createElement('img');

  const img_btn = document.createElement('button');

  principio_container.classList.add('principio_container');
  
  img.classList.add('principio');

  img_btn.classList.add('principio_btn');

  img.src = image.image;

  img_btn.textContent = "Ver Más";

  principios.appendChild(principio_container);
  
  principio_container.appendChild(img);

  principio_container.appendChild(img_btn)
});

function showPopup(popupId) {

  const popup = images.find((popup) => popup.id === popupId);

}