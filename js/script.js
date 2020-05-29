document.body.style.height= 10000 + 'px';
const rectangle = document.createElement('div');
document.body.appendChild(rectangle);

let size = 100;
let grow = true;
rectangle.style.width = '100%';
rectangle.style.height = size + 'px';
rectangle.style.position = 'fixed';
rectangle.style.top = 0;
rectangle.style.left = 0;
rectangle.style.backgroundColor = 'green';

const changeHeight = function() {

  if (size > window.innerWidth / 2) {
    grow = !grow;
    rectangle.style.backgroundColor = 'red';
  } else if (size <= 0) {
    grow = !grow;
    rectangle.style.backgroundColor = 'green';
  }

  if (grow) {
    size += 10;
  } else {
    size -= 10;
  }

  rectangle.style.height = size + 'px';
}

window.addEventListener('scroll', changeHeight)