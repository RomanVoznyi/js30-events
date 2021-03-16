const dog = [
  { name: 'Drako', age: 7 },
  { name: 'Potter', age: 2 },
];

const paragraph = document.querySelector('p');

//Regular
console.log('Hello');

//Interpolated
console.log('Hello. It my %s cool rocket', '🚀');

//Styled
console.log(
  '%c Hello. My name is Roman ',
  'font-size:25px; color:blue; font-style:italic',
);

//warning
console.warn('Be careful!');

//error
console.error('Bad request');

//info
console.info('The weather is fine today');

//testing
console.assert(1 === 2, '1 is not equal anythins except 1');

//clearing
// console.clear();

//Viewing Dom element
console.dir(paragraph);

//Grouping together
dog.forEach(el => {
  console.groupCollapsed(el.name);
  console.log('Name: ', el.name);
  console.log('Age: ', el.age);
  console.log('Dogs age:', el.age * 7);
  console.groupEnd(el.name);
});

//counting
console.count('hello');
console.count('hello');
console.count('hello');
console.count('world');
console.count('world');
console.count('world');
console.count('hello');
console.count('hello');
console.count('world');

// timing
console.time('fetching time');
fetch('https://api.github.com/users/RomanVoznyy')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching time');
    console.log(data);
  });

//table
console.table(dog);
