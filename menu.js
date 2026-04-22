document.addEventListener('DOMContentLoaded', () => {
  const $hamburger = document.querySelector('.hamburger');
  const $menu = document.querySelector('.nav-mobil');
  const $list = document.querySelector('.mobil-list');

  $hamburger.addEventListener('click', () => {
    $hamburger.classList.toggle('active');
    $menu.classList.toggle('active');
    $list.classList.toggle('active');
  });
});