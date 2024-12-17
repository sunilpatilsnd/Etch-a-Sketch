const body = document.querySelector('body');

const container = document.createElement('div');
container.classList = 'container';

for(let i = 0; i < 256 ; i++ ){
    let box = document.createElement('div');
    box.classList = 'border';
    box.textContent = i;
    container.appendChild(box);
}

body.appendChild(container);



