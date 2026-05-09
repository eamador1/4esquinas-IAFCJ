const images = [
  {
    id: '1',
    image:'img/jesucristo.png',
    feature:'img/feature-jesucristo.jpeg',
    mobile: `Creemos que Jesucristo es el único y verdadero Dios, pues en Él se mezclaron en una forma perfecta e incomprensible 
    los atributos Divinos y la naturaleza humana`,
    desktop:`Jesucristo fue concebido milagrosamente en el vientre de María, por obra y gracia del Espíritu Santo. 
    El mismo Dios del Antiguo Testamento tomó forma humana. Por lo cual creemos que Jesucristo es el único y verdadero 
    Dios, pues en Él se mezclaron en una forma perfecta e incomprensible los atributos Divinos y la naturaleza humana por 
    eso se le llana Hijo de Dios e Hijo del Hombre (Is.7:14; 52:6; 60:1-3; Lc.1.35; Jn.1:14; Ro 9:5; 1Ti 3:16)`,
  },
    
  {
    id: '2',
    image:'img/bautismo.png',
    feature:'img/feature-bautismo.jpeg',
    mobile: `El bautismo es un mandato especial y un gran privilegio pues tiene que ver con su salvación "...el que crea y 
    sea bautizado será salvo" (Mr. 16:16)`,
    desktop: `La gran comisión es de predicar el evangelio y bautizar al que creyere, por lo tanto, el bautismo
    es un mandato especial y un gran privilegio pues tiene que ver con su salvación, "...el que crea y sea bautizado
    será salvo" (Mr. 16:16), "...bautícese cada uno de vosotros el el Nombre de Jesucristo para el perdón de sus pecados..."
    (Hch. 2:38), "El bautismo que corresponde a esto ahora nos salva" (1Pe 3:21)`,
  },

  {
    id: '3',
    image:'img/santidad.png',
    feature:'img/feature-santidad.jpeg',
    mobile: `Creemos que todos los miembros del cuerpo de Cristo  deben ser santos , es decir, apartados del pecado y consagrados 
    al servicio de Dios.`,
    desktop:`Creemos que todos los miembros del cuerpo de Cristo  deben ser santos , es decir, apartados del pecado y consagrados 
    al servicio de Dios. Por esta razón deben de abstenerse de toda clase de prácticas, diversiones e inmundicias de la carne y 
    del espíritu (Lv. 19: 2; 2Co. 7: 1; Ef. 5: 26-27; 1Ti.4: 3-4; 2Ti.2: 21; He.12: 14; 1Ped 1: 15: 17)`,
  }
];

const principios = document.querySelector('.principios');

images.forEach((image) => {

  const principio_container = document.createElement('div');

  const img = document.createElement('img');

  const img_btn = document.createElement('button');

  const modal = document.querySelector('.modal');

  const modalImg = document.querySelector('.modal-img');

  const modalText = document.querySelector('.modal-text');

  const closeBtn = document.querySelector('.close-btn')

  principio_container.classList.add('principio_container');
  
  img.classList.add('principio');

  img_btn.classList.add('principio_btn');

  img.src = image.image;

  img_btn.textContent = "Ver Más";

  img_btn.addEventListener('click', () => {

  modal.classList.remove('hidden');

  modalImg.src = image.feature;

  if (window.innerWidth <= 768) {
    modalText.textContent = image.mobile;
  } else {
    modalText.textContent = image.desktop;
  }

});

  principios.appendChild(principio_container);
  
  principio_container.appendChild(img);

  principio_container.appendChild(img_btn)

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');

});

modal.addEventListener('click', (e) => {

  if (e.target === modal) {
    modal.classList.add('hidden');
  }

});


});