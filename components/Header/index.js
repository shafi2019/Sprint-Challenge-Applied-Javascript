// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const head = document.querySelector('.header-container');

function header() {
    //Elements//
    const newHeader = document.createElement('div');
    const newDate = document.createElement('span');
    const newHeadline = document.createElement('h1');
    const newTemp = document.createElement('span');


    head.appendChild(newHeader);
    newHeader.appendChild(newDate);
    newHeader.appendChild(newHeadline);
    newHeader.appendChild(newTemp);

    //content//
    newDate.textContent = 'SMARCH 28, 2019';
    newHeadline.textContent = 'Lambda Times';
    newTemp.textContent = '98°';
    
//classes//
    newHeader.classList.add('header');
    newDate.classList.add('date');
    newTemp.classList.add('temp');
    
    return newHeader;
};

header();
