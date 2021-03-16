const taskList = document.querySelector('.task-list');

const tasks = [
  {
    day: 'Day 1',
    title: 'Drum Kit',
    pageLink: './day1-drumkit/drumkit.html',
    imageLink: './common/images/screenshots/screenDrumkit.jpg',
  },
  {
    day: 'Day 2',
    title: 'Clock',
    pageLink: './day2-clock/clock.html',
    imageLink: './common/images/screenshots/screenClock.jpg',
  },
  {
    day: 'Day 3',
    title: 'Playing with CSS Vaiables and JS',
    pageLink: './day3-playing-cssvar/cssvar.html',
    imageLink: './common/images/screenshots/screenCSSVar.jpg',
  },
  'skip',
  {
    day: 'Day 5',
    title: 'Flex Panels Image Gallery',
    pageLink: './day5-flex-panels/flexpanels.html',
    imageLink: './common/images/screenshots/screenFlexPannels.jpg',
  },
  {
    day: 'Day 6',
    title: 'Search countries',
    pageLink: './day6-countries/countries.html',
    imageLink: './common/images/screenshots/screenAjaxSearch.jpg',
  },
  'skip',
  {
    day: 'Day 8',
    title: 'Fun with Canvas',
    pageLink: './day8-fun-with-canvas/canvas.html',
    imageLink: './common/images/screenshots/screenCanvas.jpg',
  },
  'skip',
  {
    day: 'Day 10',
    title: 'ToDo List and Shift button',
    pageLink: './day10-todo-shift/todoshift.html',
    imageLink: './common/images/screenshots/screenTodoShift.jpg',
  },
];

const markup = tasks
  .map(el => {
    if (el === 'skip') {
      return '<li>...</li>';
    }
    return `<li class="task-item">
          <a
            href="${el.pageLink}"
            target="_blank"
            class="task-link"
          >
            <h4><span class="days">${el.day} </span>${el.title}</h4>
            <img
              src="${el.imageLink}"
              alt="screenshot"
            />
          </a>
        </li>`;
  })
  .join('');

taskList.innerHTML = markup;
