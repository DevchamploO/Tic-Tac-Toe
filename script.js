var player;
var computer;
var ran;
//0 1 2
//3 4 5
//6 7 8

var c0 = $('#cell-0');
var c1 = $('#cell-1');
var c2 = $('#cell-2');
var c3 = $('#cell-3');
var c4 = $('#cell-4');
var c5 = $('#cell-5');
var c6 = $('#cell-6');
var c7 = $('#cell-7');
var c8 = $('#cell-8');
var td = $('td');

var tileArray = [c1,c2,c3,c4,c5,c6,c7,c8];

//player picks letter and assigns them
function choose(){
  var choice = prompt('Choose either "X" or "O"( use uppercase)');
  if(choice == 'X'){
    player = 'X';
    computer = 'O';
  } else if (choice == 'O'){
    player = 'O';
    computer = 'X';
  } else{
    choose();
  }
}

//start a game
function newGame(){
  choose();
  $('td').click(function(){
    if($(this).text() == ''){
    $(this).text(player);
      checkVic();
      computerAI();
    }
  });
}

//generates a random tile
function random(){
  ran = tileArray[Math.floor(Math.random() * tileArray.length)];
}
//computer picks random tile
function computerAI(){
  while(true){
    random()
    if(ran.text() == ''){
      ran.text(computer);
      break;
    }
  }
  checkVic();
}

//rotate Turns
function changeTurns(){
  if(turns % 2 != 0){
    alert('player turn');
  } 
  else if(turns % 2 == 0){
   alert(computer);
  }
}

function checkVic(){
  if((c0.text() == 'X' && c1.text() == 'X' && c2.text() == 'X')||
    (c0.text() == 'O' && c1.text() == 'O' && c2.text() == 'O')||(
    c3.text() == 'X' && c4.text() == 'X' && c5.text() == 'X')||(
    c3.text() == 'O' && c4.text() =='O' && c5.text() == 'O')||(
    c6.text() == 'X' && c7.text() == 'X' && c8.text() == 'X')||(
    c6.text() == 'O' && c7.text() == 'O' && c8.text() == 'O')||(
    c0.text() == 'X' && c3.text() == 'X' && c6.text() == 'X')||(
    c0.text() == 'O' && c3.text() == 'O' && c6.text() == 'O')||(
    c1.text() == 'X' && c4.text() =='X' && c7.text() == 'X')||(
    c1.text() == 'O' && c4.text() == 'O' && c7.text() == 'O')||(
    c2.text() == 'X' && c5.text() == 'X' && c8.text() == 'X')||(
    c2.text() == 'O' && c5.text() == 'O' && c8.text() == 'O')||(
    c0.text() == 'X' && c4.text() == 'X' && c8.text() == 'X')||(
    c0.text() == 'O' && c4.text() == 'O' && c8.text() == 'O')||(
    c2.text() == 'X' && c4.text() == 'X' && c6.text() == 'X')||(
    c2.text() == 'O' && c4.text() == 'X' && c6.text() == 'O')
    ){
    if(turns % 2 == 0){
      alert('YOU WIN');
    reset();
    } else {
      alert('COMPUTER WINS');
      reset();
    }
} else if (c0.text() && c1.text() && c2.text() && c3.text() && c4.text() && c5.text()   && c6.text() && c7.text() && c8.text() != "") {
    alert("it's a draw");
    reset();
}
}

//Resets the board
function reset(){
  c0.text('');
  c1.text('');
  c2.text('');
  c3.text('');
  c4.text('');
  c5.text('');
  c6.text('');
  c7.text('');
  c8.text('');
  location.reload();
}

newGame();