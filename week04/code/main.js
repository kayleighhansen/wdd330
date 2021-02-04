//select all td tags and add a touchend event listener
const squares = document.querySelectorAll('td');
squares.forEach(
    td => {
        td.addEventListener("touchend", move);
    } 
)

//select the player indicator at the bottom of the screen
document.querySelector('.turn-indicator').innerHTML = "Player 1's Turn";

//select the table
const board = document.querySelector('table');

//set player to default 0
let player = 0;

//changes the turn each time this function is called
function next_turn() {
    return player = player + 1;
}

//reset button
function resetBoard() {
    for (let i = 0; i < board.rows.length; i++) {
      let row = board.rows[i];
      for (let j = 0; j < row.cells.length; j++) {
        row.cells[j].innerHTML = '';
      }
    }
}

//each time a box is touched
function move(event, player) {
    //change the turn of the player 
    let turn = next_turn(player);
    console.log(turn);
    
    //if the turn is even, place an X
    if (turn % 2 == 0) {
        your_square = event.target.className;
        event.target.innerHTML = "X";

        //change the indicator at the bottom of the screen
        document.querySelector('.turn-indicator').innerHTML = "Player 1's Turn";
    }
    
    //if it is odd, place a 0
    else if (turn % 2 == 1) {
        your_square = event.target.className;
        event.target.innerHTML = "0";

        //change the indicator at the bottom of the screen
        document.querySelector('.turn-indicator').innerHTML = "Player 2's Turn";
    }
}