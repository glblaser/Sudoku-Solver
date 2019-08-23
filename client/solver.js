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

//input 9x9 matrix of ints.  0 for empty space, int represents int.

//takes in array of 9 ints and return conflict = true if any int 1-9 is repeated
const _checkConflicts = arr => {
  let set = new Set();

  for (let i = 0; i < 9; i++) {
    if (set.has(arr[i]) && arr[i] !== 0) {
      return true;
    } else {
      set.add(arr[i]);
    }
  }
  return false;
};

const _checkRow = (board, row) => {
  let arr = board[row];
  return _checkConflicts(arr);
};

const _checkCol = (board, col) => {
  let arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push(board[i][col]);
  }

  return _checkConflicts(arr);
};

const _checkSquare = (board, row, col) => {
  let arr = [];
  let startRow = row < 3 ? 0 : row < 6 ? 3 : 6;
  let startCol = col < 3 ? 0 : col < 6 ? 3 : 6;

  for (let x = startRow; x < startRow + 3; x++) {
    for (let y = startCol; y < startCol + 3; y++) {
      arr.push(board[x][y]);
    }
  }

  return _checkConflicts(arr);
};

//returns true if any conflicts at board[row][col]
const _checkAnyConflicts = (board, row, col) => {
  return (
    _checkRow(board, row) ||
    _checkCol(board, col) ||
    _checkSquare(board, row, col)
  );
};

const _copyBoard = board => {
  let copy = [];
  for (let i = 0; i < 9; i++) {
    copy.push(board[i].slice());
  }

  return copy;
};

const _findNextZero = (board, row, col) => {
  while (row != 9 && board[row][col] != 0) {
    col++;
    if (col === 9) {
      row++;
      col = 0;
    }
  }

  return { row: row, col: col };
};

const solveBoard = (board) => {
  let solution = [];

  const addMove = (currentBoard, row, col) => {
    if (col === 9) {
      row++;
      col = 0;
    }
    if (row === 9) {
      solution = sudokuChecker(currentBoard) ? currentBoard : [];
      return;
    } else {
      if (board[row][col] === 0) {
        let boardCopy = _copyBoard(currentBoard);

        for (let x = 1; x <= 9; x++) {
          if (!solution[0]) {
            boardCopy[row][col] = x;
            if (!_checkAnyConflicts(boardCopy, row, col)) {
              let nextSpot = _findNextZero(boardCopy, row, col);
              addMove(boardCopy, nextSpot.row, nextSpot.col);
            }
          }
        }
      } else {
        let nextSpot = _findNextZero(currentBoard, row, col);
        addMove(currentBoard, nextSpot.row, nextSpot.col);
      }
    }
  };

  addMove(board, 0, 0);

  return solution[0] ? solution : "No solution";
};

let currentSolution = [
  [1, 3, 9, 7, 6, 2, 4, 5, 8],
  [7, 4, 8, 5, 9, 1, 3, 2, 6],
  [6, 5, 2, 4, 8, 3, 7, 9, 1],
  [5, 2, 3, 8, 1, 6, 9, 7, 4],
  [4, 8, 6, 9, 5, 7, 2, 1, 3],
  [9, 1, 7, 2, 3, 4, 8, 6, 5],
  [2, 7, 1, 6, 4, 8, 5, 3, 9],
  [3, 9, 4, 1, 2, 5, 6, 8, 7],
  [8, 6, 5, 3, 7, 9, 1, 4, 2]
];

// let board = [
//   [0, 3, 0, 0, 0, 0, 0, 5, 0],
//   [0, 0, 8, 0, 9, 1, 3, 0, 0],
//   [6, 0, 0, 4, 0, 0, 7, 0, 0],
//   [0, 0, 3, 8, 1, 0, 0, 0, 0],
//   [0, 0, 6, 0, 0, 0, 2, 0, 0],
//   [0, 0, 0, 0, 3, 4, 8, 0, 0],
//   [0, 0, 1, 0, 0, 8, 0, 0, 9],
//   [0, 0, 4, 1, 2, 0, 6, 0, 0],
//   [0, 6, 0, 0, 0, 0, 0, 4, 0]
// ];

let hardestPuzzle = [
  [8, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 6, 0, 0, 0, 0, 0],
  [0, 7, 0, 0, 9, 0, 2, 0, 0],
  [0, 5, 0, 0, 0, 7, 0, 0, 0],
  [0, 0, 0, 0, 4, 5, 7, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 3, 0],
  [0, 0, 1, 0, 0, 0, 0, 6, 8],
  [0, 0, 8, 5, 0, 0, 0, 1, 0],
  [0, 9, 0, 0, 0, 0, 4, 0, 0]
];

console.log(solveBoard(hardestPuzzle));
