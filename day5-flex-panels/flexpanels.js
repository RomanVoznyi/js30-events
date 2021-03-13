const panels = document.querySelectorAll('.panel');

panels.forEach(el => el.addEventListener('click', toggleActive));
panels.forEach(el => el.addEventListener('transitionend', toggleActive));

function toggleActive(evt) {
  if (evt.type === 'click') {
    evt.currentTarget.classList.toggle('active');
  }
  if (evt.type === 'transitionend' && evt.propertyName.includes('flex')) {
    evt.currentTarget.classList.toggle('open');
  }
}
