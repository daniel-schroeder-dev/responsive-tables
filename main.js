const viewportWidth = document.querySelector('html').clientWidth;
let divs = Array.from(document.querySelectorAll('div'));

console.log(divs);

const columns = [
  'column-1',
  'column-2',
  'column-3',
];

const rows = [
  '(c1)row-1',
  '(c2)row-1',
  '(c3)row-1',
  '(c1)row-2',
  '(c2)row-2',
  '(c3)row-2',
  '(c1)row-3',
  '(c2)row-3',
  '(c3)row-3',
];

if (viewportWidth < 750) {
  const smallDeviceColumns = [...columns, ...columns, ...columns];
  divs = divs.map((div, i) => {
    if (i % 2) {
      return div.textContent = rows.shift();
    }
    return div.textContent = smallDeviceColumns.shift();
  });
} else {
  
}