const endpoint = 'https://restcountries.eu/rest/v2/name';

const list = document.querySelector('.country-list');
const input = document.querySelector('.input-search');

input.addEventListener('change', fetchRequest);
input.addEventListener('input', fetchRequest);

async function fetchRequest(evt) {
  const country = evt.currentTarget.value;
  try {
    fetch(`${endpoint}/${country}`)
      .then(response => (response.ok ? response.json() : []))
      .then(data => (list.innerHTML = createMarkup(data, country)));
  } catch (error) {}
}

function createMarkup(arr, text) {
  if (arr.length === 0) {
    return `<li class="country-item">Any country was not found</li>`;
  }

  return arr
    .map(el => {
      const regex = new RegExp(text, 'gi');

      const newName = el.name.replace(regex, `<span class="marker">$&</span>`);
      const newCap = el.capital.replace(
        regex,
        `<span class="marker">$&</span>`,
      );
      const newNativeName = el.nativeName.replace(
        regex,
        `<span class="marker">$&</span>`,
      );

      return `
        <li class="country-item">
          <p>
            <span class="country-name">${newName}</span><br>
            <span>cap.:&nbsp;${newCap}</span><br>
            <span>(${newNativeName}),&nbsp;</span>
            <span>${el.region}</span>
          </p>        
          <span class="country-population">${el.population.toLocaleString()}</span>
        </li>`;
    })
    .join('');
}

function checkMatch(name, text) {
  return newName;
}
