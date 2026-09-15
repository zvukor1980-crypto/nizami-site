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
  if (!imgs.length) return;
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

/* party sky: flying toys + confetti */
const toys = ['🍆','🍆','🍆','👑','💖','🎤','✨','🥂','💃','🪩','💋','🎉','🌈','🍌','🦄','🔥','🍾','🎀'];
const colors = ['#ff6eb4','#ffe066','#ff4da6','#b478ff','#7af0ff','#ff9f6b','#fff'];
const layer = document.getElementById('floaters');
const confetti = document.getElementById('confetti');

function spawnFlyer(el, emoji) {
  const s = document.createElement('span');
  s.className = 'fly' + (Math.random() > 0.55 ? ' fly-lg' : '');
  s.textContent = emoji;
  s.style.setProperty('--x', (Math.random() * 100).toFixed(1) + '%');
  s.style.setProperty('--dur', (7 + Math.random() * 10).toFixed(1) + 's');
  s.style.setProperty('--delay', (-Math.random() * 12).toFixed(1) + 's');
  el.appendChild(s);
}

function seedParty() {
  if (!layer) return;
  for (let n = 0; n < 28; n++) {
    spawnFlyer(layer, toys[n % toys.length]);
  }
  if (!confetti) return;
  for (let n = 0; n < 40; n++) {
    const i = document.createElement('i');
    i.style.setProperty('--x', (Math.random() * 100).toFixed(1) + '%');
    i.style.setProperty('--dur', (6 + Math.random() * 8).toFixed(1) + 's');
    i.style.setProperty('--delay', (-Math.random() * 10).toFixed(1) + 's');
    i.style.setProperty('--drift', ((Math.random() * 80) - 40).toFixed(0) + 'px');
    i.style.setProperty('--c', colors[n % colors.length]);
    confetti.appendChild(i);
  }
}
seedParty();

/* burst more 🍆 on click anywhere (fun) */
document.addEventListener('click', (e) => {
  if (!layer || e.target.closest('a, button, video, input, textarea')) return;
  for (let n = 0; n < 5; n++) {
    const s = document.createElement('span');
    s.className = 'fly fly-lg';
    s.textContent = '🍆';
    s.style.left = e.clientX + (Math.random() * 60 - 30) + 'px';
    s.style.bottom = 'auto';
    s.style.top = e.clientY + 'px';
    s.style.setProperty('--dur', (4 + Math.random() * 3).toFixed(1) + 's');
    s.style.setProperty('--delay', '0s');
    s.style.animationName = 'rise-spin';
    layer.appendChild(s);
    setTimeout(() => s.remove(), 7000);
  }
});
