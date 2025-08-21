'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const x = e.pageX - wall.offsetLeft;
  const y = e.pageY - wall.offsetTop;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let newX = x - spiderWidth / 2;
  let newY = y - spiderHeight / 2;

  const maxX = wall.offsetWidth - spiderWidth;
  const maxY = wall.offsetHeight - spiderHeight;

  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));

  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
  // console.log(`Clicked at: (${x}, ${y})`);
});
