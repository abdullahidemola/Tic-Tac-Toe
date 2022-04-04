const boxes = document.querySelectorAll('.box');
const text = document.querySelector('#heading');
const strategy = document.querySelector('#strategy');
const restartBtn = document.querySelector('#restart');

const spaces = [];
const tick_circle = 'O';
const tick_x = 'X';
let currentPlayer = tick_circle;

strategy.textContent = `Player ${currentPlayer}'s turn`

const drawBoard = () => {
    boxes.forEach((box, i) => {
      
      box.addEventListener('click', boxClicked);
    });
};



const boxClicked = (e) => {
  const id = e.target.id;
  if (spaces[id] == null ) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    if (playerWon()) {
      text.innerText = `Player ${currentPlayer} has won!`;
      restart();
      return;
    }

    if (playerDraw()) {
      return;
    }
    currentPlayer = currentPlayer === tick_circle ? tick_x : tick_circle;
    strategy.textContent = `Player ${currentPlayer}'s turn`
  }
};

const playerWon = () => {
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      return true;
    }
  }
  if (spaces[8] === currentPlayer) {
    if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
      return true;
    }
    if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
      return true;
    }
  }
  if (spaces[4] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
      return true;
    }
    if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
      return true;
    }
  }
};

const playerDraw = () => {
  let draw = 0;
  spaces.forEach((space, i) => {
    if (spaces[i] !== null) draw++;
  });
  if (draw === 9) {
    text.innerText = `Draw`;
    restart();
  }
};

const restart = () => {
  setTimeout(() => {
    spaces.forEach((space, i) => {
      spaces[i] = null;
    });
    boxes.forEach((box) => {
      box.innerText = '';
    });
    text.innerText = `Play`;
    strategy.innerText = ``;
  }, 2000);
};

restartBtn.addEventListener('click', function () {
  spaces.forEach((space, i) => {
    spaces[i] = null;
  });
  boxes.forEach((box) => {
    box.innerText = '';
  });
  text.innerText = `Play`;
  strategy.textContent = `Player ${currentPlayer}'s turn`
});
restart();
drawBoard();