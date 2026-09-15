document.getElementById('y').textContent = new Date().getFullYear();

const caps = [
  'Документальное фото. Лицо Низами — рабочее. Платье — боевое.',
  'Queen of Everything. Тиара не шутит.',
  'Princess of the House. Beauty has no age.'
];
const carousel = document.getElementById('heroCarousel');
const cap = document.getElementById('heroCap');
const frame = document.querySelector('.hero-photo');
const imgs = carousel ? [...carousel.querySelectorAll('img')] : [];
let i = 0;

function show(n) {
  if (!imgs.length) return;
  imgs.forEach((img, idx) => img.classList.toggle('active', idx === n));
  if (cap) cap.textContent = caps[n] || caps[0];
}
setInterval(() => {
  i = (i + 1) % imgs.length;
  show(i);
}, 2800);

if (frame) {
  frame.addEventListener('click', () => {
    frame.classList.toggle('fast');
    i = (i + 1) % imgs.length;
    show(i);
  });
}
