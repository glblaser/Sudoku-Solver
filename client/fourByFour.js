var _rotateBoard = function(board) {
  // Your code here.
  let newRow = [];
  let newBoard = [];

  for (let i = 0; i <= 3; i++) {
    for (let j = 3; j >= 0; j--) {
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
  for (let i = 0; i < 4; i++) {
    if (
      board[i].reduce(function(acc, cur) {
        return acc + cur;
      }) != 10
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

  for (let i = 0; i < 4; i++) {
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
  for (let i = 0; i < 4; i++) {
    arr.push(board[i][col]);
  }

  return _checkConflicts(arr);
};

const _checkSquare = (board, row, col) => {
  // console.log('row', row, 'col', col)
  let arr = [];
  let startRow = row < 2 ? 0 : 2;
  let startCol = col < 2 ? 0 : 2;

  for (let x = startRow; x < startRow + 2; x++) {
    for (let y = startCol; y < startCol + 2; y++) {
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
  for (let i = 0; i < 4; i++) {
    copy.push(board[i].slice());
  }

  return copy;
};

const findNextZero= (board, row, col) => {
  while (row != 4 && board[row][col] != 0) {
    col++
    if (col === 4) {
      row++
      col = 0
    }
  }

  return {row: row, col: col}
}

const solver = (board) =>{

  let solution = []

  const addMove = (currentBoard, row, col) => {
    if (col === 4) {
      row++;
      col = 0;
    }
    if (row === 4) {
      console.log('solution!')
      solution = sudokuChecker(currentBoard) ? currentBoard : []
      return
    } else {
      if (board[row][col] === 0) {
        let boardCopy = _copyBoard(currentBoard)

        for (let x = 1; x <= 4; x++) {
          boardCopy[row][col] = x
          if (!_checkAnyConflicts(boardCopy,row, col)) {
            let nextSpot = findNextZero(boardCopy, row, col)
            addMove(boardCopy, nextSpot.row, nextSpot.col)
          }
        }
      } else {
        let nextSpot = findNextZero(currentBoard, row, col)
        addMove(currentBoard, nextSpot.row, nextSpot.col)
      }
    }

    

  }

  addMove(board,0,0)

  return solution.length > 0 ? solution : 'No solution'
}

// let board = [
  // [1,2,3,4],
  // [4,3,2,1],
  // [2,4,1,3],
  // [3,1,4,4]
// ]

let board = [  
  [1,0,3,4],
  [4,3,0,1],
  [0,4,3,3],
  [3,0,4,0]
]

console.log(solver(board))

let y = [
  [ 1, 2, 3, 4 ], 
  [ 2, 3, 4, 1 ], 
  [ 3, 4, 0, 2 ], 
  [ 4, 0, 2, 0 ]
]