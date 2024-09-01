const container = document.querySelector(".container");

function createGrid(row,column){
    for(let i = 0; i < row*column; i++)
    {
        let gridItem = document.createElement('div');
        gridItem.className ='grid-item';

        //gridItem.textContent = i+1;

        gridItem.addEventListener('mouseenter',() => {
            gridItem.classList.add('hovered');
        })

        // gridItem.addEventListener('mouseleave',() => {
        //     gridItem.classList.remove('hovered');
        // })

        container.appendChild(gridItem);
    }

}



createGrid(16,16);