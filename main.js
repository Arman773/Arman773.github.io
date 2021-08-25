let game = document.querySelector(".game");
let parentParagraph = document.querySelector(".parent p");
setTimeout(animation(),5000);
k = 1;

let scoreX = 0;
let scoreO = 0;
let scoreDraw = 0;

function animation(){
  parentParagraph.classList.add('parent_animation')
}

function createGameBoard (){
    for(i=1; i<=3; i++){
        let line = document.createElement('div');
        line.classList.add(`line`);
        for(j=1; j<=3; j++){
            let cell = document.createElement('div');
            cell.classList.add(`cell`);
            cell.setAttribute('number',k);
            k++;
            line.appendChild(cell);
        }
        game.appendChild(line);
    }
};

createGameBoard();


let cells = document.getElementsByClassName("cell");

let player = 'x';
let isFullArray = [];

setTimeout(() => {
  document.querySelector(".playerX").style.backgroundColor = 'rgba(80,80,210,0.215)'
}, 3000);

function table(){
  document.querySelector(".scoreX").innerHTML = "X's score: " + scoreX; 
  document.querySelector(".scoreDraw").innerHTML = "Draw: " + scoreDraw;
  document.querySelector(".scoreO").innerHTML = "O's score: " + scoreO;
}

table();

game.addEventListener('click', clickFunction);

function clickFunction(event){

    if (event.target.innerHTML !== ''){
        alert('This cell is full');
        player = player == 'x' ? 'o' : 'x';
    }

    
    
      if (!(isFullArray.includes(event.target.getAttribute('number')))){
        isFullArray.push(event.target.getAttribute('number'));
      }
    

    if (isFullArray.length === 9){
      scoreDraw += 1;
      setTimeout(() => {
        restartGame(cells);
      }, 3000);
    }
    
    event.target.innerHTML = player;
    if (win(cells)){
      if (player === 'x'){
        scoreX += 1;
        document.querySelector('.winnerX img').style.display = 'block';
      } else {
        scoreO += 1;
        document.querySelector('.winnerO img').style.display = 'block';

      }

      table();

      game.removeEventListener('click', clickFunction);
      setTimeout(() => {
        restartGame(cells);
      }, 3000);
    }
    player = player == 'x' ? 'o' : 'x' ;
    if (player === 'x'){
      document.querySelector(".playerX").style.backgroundColor = 'rgba(80,80,210,0.215)'
      document.querySelector(".playerO").style.backgroundColor = 'transparent'
    } else {
      document.querySelector(".playerX").style.backgroundColor = 'transparent'
      document.querySelector(".playerO").style.backgroundColor = 'rgba(80,80,210,0.215)'

    }

    
}

function restartGame(cells){

    for(i=0; i<cells.length; i++){
      cells[i].innerHTML = "";
    }
    player = 'x';
    isFullArray.length = 0;
    document.querySelector('.winnerX img').style.display = 'none';
    document.querySelector('.winnerO img').style.display = 'none';

    document.querySelector(".playerX").style.backgroundColor = 'transparent'
    document.querySelector(".playerO").style.backgroundColor = 'transparent'
    
    document.querySelector(".playerX").style.backgroundColor = 'rgba(80,80,210,0.215)'

    game.addEventListener('click', clickFunction);

      
}

let win =  function chekingWin(cells){

    // checking vertical lines

    if (cells[0].innerHTML === player && cells[1].innerHTML === player && cells[2].innerHTML === player){
      return true
    }
    if (cells[3].innerHTML === player && cells[4].innerHTML === player && cells[5].innerHTML === player){
      return true
    }
    if (cells[6].innerHTML === player && cells[7].innerHTML === player && cells[8].innerHTML === player){
      return true
    }

    //checking horizontal lines

    if (cells[0].innerHTML === player && cells[3].innerHTML === player && cells[6].innerHTML === player){
      return true
    }
    if (cells[1].innerHTML === player && cells[4].innerHTML === player && cells[7].innerHTML === player){
      return true
    }
    if (cells[2].innerHTML === player && cells[5].innerHTML === player && cells[8].innerHTML === player){
      return true
    }

    //checking diagonal lines

    if (cells[0].innerHTML === player && cells[4].innerHTML === player && cells[8].innerHTML === player){
      return true
    }if (cells[2].innerHTML === player && cells[4].innerHTML === player && cells[6].innerHTML === player){
      return true
    }

    return false
} 

document.querySelector('.reset').addEventListener("click", () => {
  document.querySelector(".scoreX").innerHTML = "X's score: " + 0; 
  document.querySelector(".scoreDraw").innerHTML = "Draw: " + 0;
  document.querySelector(".scoreO").innerHTML = "O's score: " + 0;

})

