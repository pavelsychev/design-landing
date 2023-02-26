//при скролле вниз меняем цвет фона шапки меню
document.body.addEventListener('scroll', e => {
  const headerInner = document.getElementById('header_scroll');
  const scrollTop = document.body.scrollTop;

  headerInner.classList.toggle('header_active', scrollTop > 50);
});


// меню бургер
const menuList = document.querySelector('.menu');
const btnOpenMenu = document.getElementById('btn_open');

btnOpenMenu.addEventListener('click', ev => {
  menuList.classList.toggle('menu__active');
});

menuList.addEventListener('click', ev => {
  if (ev.target.tagName == 'A'
    || ev.target.classList.contains('event-close'))
    menuList.classList.toggle('menu__active');
});

//импортируем webpack
import * as flsFunctions from "./modules/function.js";

 flsFunctions.isWebp();

//плагин Swiper
 import Swiper, { Navigation, Pagination } from 'swiper';

 const swiper = new Swiper();




