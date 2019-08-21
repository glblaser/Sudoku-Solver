var _rotateBoard = function(board) {
  // Your code here.
  let newRow = [];
  let newBoard = [];

  for (let i = 0; i <= 8; i++) {
    for (let j = 8; j >= 0; j--) {
      newRow.push(board[j][i]);
    }
    newBoard.push(newRow);
    newRow = [];
  }

  return newBoard;
};

const _checkCols = board => {
  //convert columns to rows and use _checkRows
  board = _rotateBoard(board);

  return _checkRows(board);
};

const _checkRows = board => {
  for (let i = 0; i <= 8; i++) {
    if (
      board[i].reduce(function(acc, cur) {
        return acc + cur;
      }) != 45
    ) {
      return false;
    }
  }

  return true;
};

function sudokuChecker(board) {
  return _checkRows(board) && _checkCols(board) && board[0][0] != board[0][1]
    ? true
    : false;
}

module.exports = { sudokuChecker }
