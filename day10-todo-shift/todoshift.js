const todolist = document.querySelector('.todo-list');

const daylist = [
  'Wake up',
  'Do morning exercises',
  'Wash up',
  'Have breakfast',
  'Get dressed',
  'Drive to work',
  'Work well up to lunchtime',
  'Have lunch',
  'Work well up to evening',
  'Drive to home',
  'Have dinner',
  'Fun with family',
  'Do awesome coding',
  'Go to bad',
];

const markup = daylist
  .map(el => {
    return `<li class="todo-item">
                <label class="todo-box">
                    <input class="todo-checkbox" type="checkbox">
                    <span class="todo-text">${el}</span>
                </label>
            </li>`;
  })
  .join('');

todolist.innerHTML = markup;

const inputs = document.querySelectorAll('input');
inputs.forEach(el => el.addEventListener('click', handleClick));
window.addEventListener('keydown', handleClick);

let lastItem = null;
let inBetween = false;

function handleClick(evt) {
  if (evt.type !== 'click' && !evt.shiftKey) {
    return;
  }

  if (
    (!evt.shiftKey && evt.target.checked) ||
    (!evt.shiftKey && !evt.target.checked) ||
    (evt.shiftKey && evt.target.checked && lastItem === null) ||
    (evt.shiftKey && evt.target === lastItem)
  ) {
    lastItem = evt.target;
  } else if (evt.shiftKey && evt.target.checked) {
    console.log('target - ', evt.target, 'last - ', lastItem);
    inputs.forEach(el => {
      if (el === evt.target || el === lastItem) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        el.checked = true;
      }
    });
    lastItem = evt.target;
  }
}
