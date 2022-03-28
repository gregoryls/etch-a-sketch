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

function hoverButtonCreation() {
    let squares = document.querySelectorAll('.row');
    squares.forEach((row) => {
        row.addEventListener('mouseenter', () => {
            // row.setAttribute('style', 'background-color: red')
            //row.classList.add('mouse-enter');
            row.style.backgroundColor = randomColor();
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

let resetButton = document.querySelector('.reset')
resetButton.addEventListener('click', () => {
    clearGrid();
    createColumns(parseInt(prompt('Please enter a number between 1-100')));
    hoverButtonCreation();
});
createColumns(16);
hoverButtonCreation();
