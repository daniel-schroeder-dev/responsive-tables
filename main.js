/*
*   I'm assuming that you can just hard-code the data, and don't need to
*   create it dynamically from some other format. If that's the case, you 
*   will need to figure out a way to get the data from the format you have
*   it in into these forms.
*/
const smallDeviceColumns = [
  'column-1',
  'column-2',
  'column-3',
  'column-1',
  'column-2',
  'column-3',
  'column-1',
  'column-2',
  'column-3',
];

const smallDeviceRows = [
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

const largeDeviceColumns = [
  'column-1',
  'column-2',
  'column-3',
];

const largeDeviceRows = [
  '(c1)row-1',
  '(c1)row-2',
  '(c1)row-3',
  '(c2)row-1',
  '(c2)row-2',
  '(c3)row-3',
  '(c3)row-1',
  '(c3)row-2',
  '(c2)row-3',
];

/*
*   Setup the initial table when the page loads, if the user isn't changing the
*   viewport size, this will be all that runs.
*/
let viewportWidth = document.querySelector('html').clientWidth;
createTable(viewportWidth)

/*
*   Ensures that the table is updated on 'resize' events.
*/
window.addEventListener('resize', () => {
  let viewportWidth = document.querySelector('html').clientWidth;
  createTable(viewportWidth);
});

/*
*   Create the table based on the viewport width.
*/
function createTable(viewportWidth) {
  if (viewportWidth < 750) {
    createSmallViewportTable();
  } else {
    createLargeViewportTable();
  }
}

/*
*   You will need extra divs when going from large -> small viewports, or 
*   if the page is loaded on a small viewport.
*/
function createExtraDivs() {
  const NUM_DIVS = 6;
  for (let i = 0; i < NUM_DIVS; i++) {
    document.body.querySelector('main').append(document.createElement('div'));
  }
}

/*
*   Removes the extra divs when going from small -> large viewports. If the
*   page is loaded from a large viewport, this will not run.
*/
function removeExtraDivs(divs) {
  const NUM_DIVS_REMOVE = 6;
  for (let i = NUM_DIVS_REMOVE; i > 0; i--) {
    divs.pop().remove();
  }
}

/*
*   Adds extra divs to the page if neccessary, and then formats the data to
*   fit correctly on small viewports.
*/
function createSmallViewportTable() {
  
  const smallDeviceRowsCopy = [...smallDeviceRows];
  const smallDeviceColumnsCopy = [...smallDeviceColumns];
  
  let divs = Array.from(document.querySelectorAll('div'));
  
  if (divs.length < 18) {
    createExtraDivs();
    divs = Array.from(document.querySelectorAll('div'));
  } 
  
  divs = divs.map((div, i) => {
    if (i % 2) return div.textContent = smallDeviceRowsCopy.shift();
    return div.textContent = smallDeviceColumnsCopy.shift();
  });

}

/*
*   Removes extra divs to the page if neccessary, and then formats the data to
*   fit correctly on large viewports.
*/
function createLargeViewportTable() {
  
  const largeDeviceColumnsCopy = [...largeDeviceColumns];
  const largeDeviceRowsCopy = [...largeDeviceRows];
  
  let divs = Array.from(document.querySelectorAll('div'));
  
  if (divs.length > 12) {
    removeExtraDivs(divs);
    divs = Array.from(document.querySelectorAll('div'));
  }
  
  divs = divs.map(div => {
    if (largeDeviceColumnsCopy.length) return div.textContent = largeDeviceColumnsCopy.shift();
    return div.textContent = largeDeviceRowsCopy.shift();
  });

}