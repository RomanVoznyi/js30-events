const refs = {
  inputs: document.querySelectorAll('.input'),
};

refs.inputs.forEach(el => {
  el.addEventListener('change', handleInput);
  el.addEventListener('mousemove', handleInput);
});

function handleInput(evt) {
  const suffix = evt.target.name !== 'base' ? 'px' : '';
  document.documentElement.style.setProperty(
    `--${evt.target.name}`,
    `${evt.target.value}${suffix}`,
  );
}
