// create 16 divs with class of column (flex-direction column)
// create 16 divs within each column div
// append each column div to flex-grid div 

function createColumns(numColumns){
    if ((numColumns > 100)||(numColumns<1)) {
        return alert("Please select a number between 1-100");
    }
    let column = document.createElement('div');
    let grid = document.querySelector('.flex-grid');
    let row = document.createElement('div');
    row.setAttribute('class','row');
    column.setAttribute('class','col');
    column.appendChild(row);
    for (let i =0; i<(numColumns-1); i++){
        column.appendChild(row.cloneNode(true));
    }
    grid.appendChild(column);
    
    for (let j = 0; j<(numColumns-1); j++){
        
        grid.appendChild((document.querySelector('.col')).cloneNode(true));
    }
}

function hoverCreationOpacity() {
    let squares = document.querySelectorAll('.row');
    squares.forEach((row) => {
        row.style.opacity = 0;
        row.style.backgroundColor = 'black';
        row.addEventListener('mouseenter', () => {
            const opacity = row.style.opacity;           
            row.style.opacity = opacityIncrement(parseFloat(opacity));
        });
    });
}

function hoverCreationRandomRGB() {
    let squares = document.querySelectorAll('.row');
    squares.forEach((row) => {
        row.addEventListener('mouseenter', () => {
            row.style.backgroundColor = randomColor();
        });
    });
}

function hoverCreationMonochrome() {
    let squares = document.querySelectorAll('.row');
    squares.forEach((row) => {
        row.addEventListener('mouseenter', () => {
            row.classList.add('mouse-enter');   
        });
    });
}

function clearGrid() {
    let grid = document.querySelector('.flex-grid');
    while (grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}

function randomColor(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

function opacityIncrement(opacity){
    if (opacity === 1) return;
    opacity += 0.1
    return opacity;
}

let resetButtonOpacity = document.querySelector('.reset-opacity')
resetButtonOpacity.addEventListener('click', () => {
    clearGrid();
    createColumns(parseInt(prompt('Please enter a number between 1-100')));
    hoverCreationOpacity();
});

let resetButtonMonochrome = document.querySelector('.reset-monochrome')
resetButtonMonochrome.addEventListener('click', () => {
    clearGrid();
    createColumns(parseInt(prompt('Please enter a number between 1-100')));
    hoverCreationMonochrome();
});

let resetButtonRandom = document.querySelector('.reset-random-rgb')
resetButtonRandom.addEventListener('click', () => {
    clearGrid();
    createColumns(parseInt(prompt('Please enter a number between 1-100')));
    hoverCreationRandomRGB();
});


createColumns(16);
hoverCreationRandomRGB();
