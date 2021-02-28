const container = document.querySelector('.container');
const before = document.querySelector('.img-container-before');
const after = document.querySelector('.img-container-after');
const slider = document.querySelector('.slider');


container.addEventListener('mousemove', draggster);


function draggster(e) {
  let xPos = e.layerX;
  let size = container.offsetWidth;
  before.style.width = xPos + 'px';
  slider.style.left = xPos + 'px';
  if (xPos < (size * 0.1)) {
    before.style.width = 0;
    slider.style.left = 0;
  }
  if (xPos > (size * 0.9)) {
    before.style.width = 100 + '%';
    slider.style.left = 100 + '%';
  }
}
