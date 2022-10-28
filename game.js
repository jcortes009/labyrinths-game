const canvas = document.getElementById('game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;

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

    const map = maps[1];
    const mapRows = map.trim().split('\n');//eleiminate spaces in the arrays
    const columnsOfmapRows = mapRows.map(row => row.trim().split(''));

    for (let row = 1; row <= 10; row++) {
    //  game.fillText(emojis['X'], (elementsSize * 1.26), (elementsSize * 0.97) * row);
    for( let column = 1; column <= 10; column++) {
        game.fillText(emojis[columnsOfmapRows[row - 1][column - 1]], (elementsSize) * .94 * column, (elementsSize * 0.97) * row);
    }
    }

    // game.fillRect(0,0,100,100);
    // game.clearRect(0,0,100,50);// el tercer argumento es el ancho
}