const width = 800; 

function createGrid(gridSize){
    const body = document.querySelector('body');
    const container = document.querySelector('.container'); 
     
    let boxNum = gridSize**2; 
    for(let i = 0; i < boxNum ; i++ ){
        let box = document.createElement('div'); 
        box.classList = 'box border'; 
        let size = (width/gridSize) ; 
        box.style = `width: ${size-2}px; height: ${size-2}px`;  //compensating for border width
        container.appendChild(box);                     
        box.addEventListener("mouseenter",()=>{
            if(pencilSelected == true){
                paint(box);
            }            
            else if(eraserSelected == true){
                erase(box);
            }
        });
        //   box.textContent = i;
    }
    updateGridSizeUI(gridSize)
}



function deleteGrid(){                                   //clears the grid
    const container = document.querySelector('.container');
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }    
}

function updateGridSizeUI(size){
    const sizeUI = document.querySelector('#size');
    sizeUI.textContent = size;
}


// Changing grid size section start

const changeSize = document.querySelector('.gridder');
changeSize.addEventListener("click", () =>{
    let input = prompt('Enter size of the grid between 8-100');
    let size = parseInt(input);
    if(isNaN(size)){
        alert('Please enter a number between 8-100')
    }
    else if(size > 100){
        alert('Please enter a number less than 100');
    }
    else{
        deleteGrid();
        createGrid(size);
    }
        
});

// Changing grid size section end

createGrid(16); //create grid on first load
updateGridSizeUI(16); 


const wipeGrid = document.querySelector('.clear');

function clearGrid(){
    let boxes = document.querySelectorAll('.paint');
    let boxlength = boxes.length;
    boxes.forEach(box => {
        box.classList.toggle('paint');
        box.style.backgroundColor = '#fff'; 
    });
    
}

wipeGrid.addEventListener('click' , clearGrid);


const pencilBtn = document.querySelector('.pencil');
let pencilSelected = false;

pencilBtn.addEventListener('click', () => {
    pencilSelected = pencilSelected ? false : true;
    pencilBtn.classList.toggle('clicked');    
    eraserlBtn.classList.remove('clicked');
    eraserSelected = false;
});

function paint(box){
    if(pencilSelected == true){
        box.classList.add('paint')
        // box.style.backgroundColor = getRandomColor();  // Uncomment to see the colored version
    }
}

const eraserlBtn = document.querySelector('.eraser');
let eraserSelected = false;
eraserlBtn.addEventListener('click', () => {
    eraserSelected = eraserSelected ? false : true;  

    eraserlBtn.classList.toggle('clicked');
    pencilBtn.classList.remove('clicked');

    pencilSelected = false;
});

function erase(box){
    if(eraserSelected == true){
        box.classList.remove('paint');
        // box.style.backgroundColor = '#fff';  // Uncomment to see the colored version
    }  
}

function getRandomColor(){
    let red = Math.floor(255-Math.random()*100);
    let green = Math.floor(255-Math.random()*100);
    let blue = Math.floor(255-Math.random()*100);
    return `rgb(${red},${green},${blue})`;
}