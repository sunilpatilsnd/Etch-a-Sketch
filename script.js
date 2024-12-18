const width = window.innerWidth - 16; //deducting body margin value
const height = window.innerHeight - 16; //deducting body margin value

const body = document.querySelector('body'); //selecting body

const container = document.createElement('div'); //creating container
container.classList = 'container' //adding class to container

body.appendChild(container);  //adding container to body

function createGrid(gridSize){
    const container = document.querySelector('.container'); //selecting container
     
    let boxNum = gridSize**2; //calculating total num of boxes required  
    for(let i = 0; i < boxNum ; i++ ){
        let box = document.createElement('div'); //creating one box
        box.classList = 'border box'; //adding border to box
        let size = (width/gridSize) - 4; // adjusting for border size
        box.style = `width: ${size}px; height: ${size}px`; //setting box size to be square
        container.appendChild(box);                     //adding box to to container
        box.addEventListener("mouseenter",()=>{     //registering event listener for each box and paint them black on mouse entry
            box.classList.add('paint')
        });
        // box.textContent = i;
    }
    body.replaceChild(container, container);
}

createGrid(16);

const changeSize = document.querySelector('.gridder');
changeSize.addEventListener("click", () =>{
    let input = prompt('Enter size of the grid between 8-100');
    let size = parseInt(input);
    console.log(size);
    createGrid(size);
});







