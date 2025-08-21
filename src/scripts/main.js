'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();
  let x = e.clientX - rect.left - 10 - spider.offsetWidth / 2;
  let y = e.clientY - rect.top - 10 - spider.offsetHeight / 2;

  x = Math.max(10, Math.min(x, rect.width - spider.offsetWidth) - 10) - 10;
  y = Math.max(10, Math.min(y, rect.height - spider.offsetHeight) - 10) - 10;

  if (e.target.classList.contains('wall')) {
    // console.log('Wall clicked');
    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
  } else {
    // console.log('Non-wall element clicked');
  }
});
