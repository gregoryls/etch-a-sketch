// create 16 divs with class of column (flex-direction column)
// create 16 divs within each column div
// append each column div to flex-grid div 

function createColumns(){
    let column = document.createElement('div');
    let grid = document.querySelector('.flex-grid');
    let row = document.createElement('div');
    column.setAttribute('class','col');
    column.appendChild(row);
    for (let i =0; i<15; i++){
        column.appendChild(row.cloneNode(true));
    }
    grid.appendChild(column);
    
    for (let j = 0; j<15; j++){
        
        grid.appendChild((document.querySelector('.col')).cloneNode(true));
    }
}
createColumns();