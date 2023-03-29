const menu = document.querySelector('.list-nav');
const btnMenu = document.querySelector('.btn-toggle-container');

btnMenu.addEventListener('click', function () {
    //add/remove class in toggle argument
  menu.classList.toggle('active-menu');
});
