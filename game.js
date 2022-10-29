const canvas = document.getElementById('game');
const game = canvas.getContext('2d');

const btnUp = document.getElementById('up');
const btnLeft = document.getElementById('left');
const btnRight = document.getElementById('right');
const btnDown = document.getElementById('down');



let canvasSize;
let elementsSize;

const playerPosition = {
    x: undefined,
    y: undefined,
}

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize () {
    if(window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * .80;
    } else {
        canvasSize = window.innerHeight * .80;
    }
        canvas.setAttribute('width', canvasSize);
        canvas.setAttribute('height', canvasSize);
    
      elementsSize = canvasSize / 10;

      startGame();
}

function startGame () {

    console.log({canvasSize, elementsSize})

    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'center';

    const map = maps[0];
    const mapRows = map.trim().split('\n');//eliminate spaces at the bgining and the end, also in all the arrays
    const columnsOfmapRows = mapRows.map(row => row.trim().split(''));

    game.clearRect(0, 0, canvasSize, canvasSize);// render the  canva every time the player move
    
    columnsOfmapRows.forEach((row, rowIndex) => {//loop every object
        row.forEach((column, columnIndex) => {//loops index of the objects in columnsMapRows
        const emoji = emojis[column];
        const positionX = (elementsSize * 0.93)  * (columnIndex + 1);//the aditional operation(*0.93) after element size is to center the  items
        const positionY =  (elementsSize * 0.97) * (rowIndex + 1);//the aditional operation(*0.97) after element size is to center the  items 
        game.fillText(emoji, positionX, positionY)
        // console.log(rowIndex);

        if (column == 'O') {
            if (!playerPosition.x && !playerPosition.y) {
                playerPosition.x = positionX;
                playerPosition.y = positionY
            // console.log(playerPosition);
            }
        } 
        game.fillText(emoji, positionX, positionY);
        
    });
});

    // for (let row = 1; row <= 10; row++) {
    // //  game.fillText(emojis['X'], (elementsSize * 1.26), (elementsSize * 0.97) * row);
    // for( let column = 1; column <= 10; column++) {
    //     game.fillText(emojis[columnsOfmapRows[row - 1][column - 1]], positionX * column, positionY * row);
    // }
    // }

    // game.fillRect(0,0,100,100);
    // game.clearRect(0,0,100,50);// el tercer argumento es el ancho
    movePlayer();
}

function movePlayer () {

   game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
//    console.log(playerPosition); 
}


window.addEventListener('keyup', moveBYKeys);
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveBYKeys(event) {
    if (event.key == 'ArrowUp') moveUp();
    else if (event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
    else if (event.key == 'ArrowDown') moveDown();
}
function moveUp () {
    playerPosition.y -= (elementsSize * 0.4);
   startGame();
    
    console.log('up up up');
}
function moveLeft () {

    playerPosition.x -= (elementsSize * 0.94);
    startGame();
    console.log('Left left ');
}
function moveRight () {
    playerPosition.x += (elementsSize * 0.94);
    startGame();
    console.log('right right');
}
function moveDown () {
    playerPosition.y += (elementsSize * 0.4);
    startGame();
     
    console.log('Down down down ');
}
