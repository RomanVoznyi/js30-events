const canvas = document.querySelector('#canvas');
const button = document.querySelector('.clearBtn');

let drawing = false;
canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mouseup', () => (drawing = false));
canvas.addEventListener('mouseout', () => (drawing = false));
canvas.addEventListener('mousemove', draw);
button.addEventListener('click', clearCunvas);

const pensil = canvas.getContext('2d');
let startX = 0;
let startY = 0;
let color = 0;
let size = 5;
let switcher = true;
pensil.lineJoin = 'round';
pensil.lineCap = 'round';

function startDraw(evt) {
  drawing = true;
  [startX, startY] = [evt.offsetX, evt.offsetY];
}

function draw(evt) {
  if (!drawing) {
    return;
  }
  pensil.strokeStyle = `hsl(${color},100%,50%)`;
  pensil.lineWidth = size;
  pensil.beginPath();
  pensil.moveTo(startX, startY);
  pensil.lineTo(evt.offsetX, evt.offsetY);
  pensil.stroke();

  [startX, startY] = [evt.offsetX, evt.offsetY];
  color === 359 ? (color = 0) : (color += 1);
  switcher === true ? (size += 1) : (size -= 1);
  if (size > 100) {
    switcher = false;
  }
  if (size < 5) {
    switcher = true;
  }
}

function clearCunvas() {
  pensil.clearRect(0, 0, canvas.width, canvas.height);
  size = 5;
  color = 0;
}
