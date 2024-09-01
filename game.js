const topbutton = document.querySelector(".topbutton");

let gridButton = document.createElement('button');
gridButton.textContent = "Change grid size";
gridButton.style.background = 'bisque';
gridButton.style.color = "green";
gridButton.style.fontSize = "30px";
gridButton.style.fontWeight = "bold";
gridButton.style.border = '5px solid red';
topbutton.appendChild(gridButton);

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createGrid(row,column){

    let container = document.createElement("div");
    container.className = "container";

    let itemheight = (100/row) + '%';
    let itemwidth = (100/column) + '%';

    for(let i = 0; i < row*column; i++)
    {
        let gridItem = document.createElement('div');
        gridItem.className ='grid-item';

        gridItem.addEventListener('mouseenter',() => {
            gridItem.style.background = getRandomColor();
        })

        gridItem.style.height = itemheight;
        gridItem.style.width = itemwidth;

        container.appendChild(gridItem);
    }
    document.body.appendChild(container);
}

function buttonClick(){
    gridButton.addEventListener('click', () =>{
        let oldContainer = document.querySelector('.container');
        if (oldContainer) {
            oldContainer.remove();
        }
        let gridInput = parseInt(prompt("Enter number of rows and columns you want"));

        if(Number.isInteger(gridInput) && (gridInput > 0 && gridInput <= 100))
        {
            createGrid(gridInput,gridInput);
        }
        else{alert("Enter a number less than 100")};
    })
}

buttonClick();
createGrid(16,16);