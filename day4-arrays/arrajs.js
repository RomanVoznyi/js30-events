arr = [
  ['lemon', 2],
  ['orange', 5],
  ['apple', 1],
  ['banana', 2],
  ['orange', 2],
  ['apple', 1],
  ['banana', 2],
  ['lemon', 2],
  ['lemon', 2],
  ['lemon', 2],
];

const newArr = [];
for (let i = 0; i < arr.length; i++) {
  const index = newArr.findIndex(el => el[0] === arr[i][0]);
  if (index === -1) {
    newArr.push(arr[i]);
  } else {
    newArr[index][1] += arr[i][1];
  }
}

const newArr2 = arr
  .reduce((acc, el) => {
    const index = acc.findIndex(elem => elem[0] === el[0]);
    if (index === -1) {
      acc.push(el);
    }
    return acc;
  }, [])
  .sort((a, b) => b[1] - a[1]);

console.log(newArr2);
