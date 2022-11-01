const canvas = document.getElementById('game');
const game = canvas.getContext('2d');

const btnUp = document.getElementById('up');
const btnLeft = document.getElementById('left');
const btnRight = document.getElementById('right');
const btnDown = document.getElementById('down');
const spanLives = document.getElementById('span-lives');
const spanTime = document.getElementById('span-time');
const spanScore = document.getElementById('span-score');
const spanRecord = document.getElementById('span-record');


let canvasSize;
let elementsSize;
let level = 0;
let lives = 2;

let timeStart;
let timePlayer;
let timeInterval;

const playerPosition = {
    x: undefined,
    y: undefined,
}
const giftPosition = {
    x: undefined,
    y: undefined,
}

let enemyPosition = [];


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

    //console.log({canvasSize, elementsSize})

    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'center';

    const map = maps[level];

    if(!map) {
      gameWin();
      return;
    }


    if(!timeStart)  {
      timeStart = Date.now();
      timeInterval = setInterval(showTime, 100);
      showScore();
    }
    
    const mapRows = map.trim().split('\n');//eliminate spaces at the bgining and the end, also in all the arrays
    const columnsOfmapRows = mapRows.map(row => row.trim().split(''));

    showLives();

    enemyPosition = [];
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
        } else if (column == 'I') {
            giftPosition.x = positionX;
            giftPosition.y = positionY;
        } else if (column == 'X'  ) {
          enemyPosition.push({
            x: positionX,
            y: positionY,
          })
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

const giftCollisionX = playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
const giftCollisionY = playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
const giftCollision = giftCollisionX && giftCollisionY;

    if (giftCollision) {
        console.log('Next level');
        levelWin();
    }

      const enemyCollison = enemyPosition.find((enemy) => {
        const enemyCollisonX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3);
        const enemyCollisonY = enemy.y.toFixed(3) == playerPosition.y.toFixed(3);
        return enemyCollisonX && enemyCollisonY;
      });

      // console.log(playerPosition);
      // console.log(enemyPosition);
      
      if (enemyCollison) {

        console.log('boom boom ');
        game.fillText(emojis['BOMB_COLLISION'], enemyCollison.x, enemyCollison.y);
        gameOver()
      } else {

        game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
      }


}
 function levelWin () {
  console.log('next!!');
  level++;
  startGame();
 }
 function gameWin() {
  clearInterval(timeInterval);

  game.clearRect(0, 0, canvasSize, canvasSize);
  game.fillText('You made it!!', 300, 290);
  game.fillText(emojis['WIN'], 300, 350);

  let recordTime = localStorage.getItem('record-time')
  let playerTime = Math.floor((Date.now() - timeStart)/1000);

  if (recordTime) {
    if (recordTime >= playerTime) {
      localStorage.setItem('record-time', playerTime);
      spanRecord.innerHTML = 'New record! awesome!!';
    } else {
      spanRecord.innerHTML = "Sorry you couldn't achieve a new record";
    }
  } else {
    localStorage.setItem('record-time', playerTime);
    spanRecord.innerHTML = "First time? Let's try to  make a record";

  }

 }

 function gameOver () {
  lives--;
  //console.log(lives)
  if(lives <= 0) {
    level = 0;
    lives = 2;
    timeStart = undefined;    
  }
   playerPosition.x = undefined;
   playerPosition.y = undefined;
  startGame();
 }

function showLives () {
  // const heartsArray = Array(lives).fill(emojis['HEART']);
  // spanLives.innerHTML = '';
  // heartsArray.forEach(heart => spanLives.append(heart));
  // spanLives.innerHTML = heartsArray.join('');
  spanLives.innerHTML = emojis['HEART'].repeat(lives);
  
}

function showTime () {
 
  spanTime.innerHTML = Math.floor((Date.now() - timeStart)/1000);
}

function showScore () {
 spanScore.innerHTML = localStorage.getItem('record-time');
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
  if ((playerPosition.y - elementsSize) < elementsSize * 0.2) {
    //console.log('fuera');
  } else {
    playerPosition.y -= (elementsSize * 0.97);
    startGame();

    //console.log('up up up');
  }
}
function moveLeft () {
    if ((playerPosition.x - elementsSize) < elementsSize * 0.4) {
       // console.log('fuera');
      } else {
        playerPosition.x -= (elementsSize * 0.93);
        startGame();
      }
    //console.log('Left left ');
}
function moveRight () {
    if ((playerPosition.x - elementsSize) > canvasSize * 0.80) {
        //console.log('fuera');
      } else {
        playerPosition.x += (elementsSize * 0.93);
        startGame();
      }
    //console.log('right right');
}
function moveDown () {
    if ((playerPosition.y - elementsSize) > canvasSize * 0.84) {
       // console.log('fuera');
      } else {
        playerPosition.y += (elementsSize * 0.97);
        startGame();
      }
   
     
    //console.log('Down down down ');
    
}