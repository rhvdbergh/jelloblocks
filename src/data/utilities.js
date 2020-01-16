export const selectNextColor = () => {
  return Math.floor(Math.random() * 7);
};

export const constructPiece = color => {
  let piece = [];

  switch (color) {
    case 0: // S shape
      piece = [
        [4, 22, 0],
        [4, 21, 0],
        [5, 21, 0],
        [5, 20, 0]
      ];
      break;
    case 1: // Z shape
      piece = [
        [5, 22, 1],
        [5, 21, 1],
        [4, 21, 1],
        [4, 20, 1]
      ];
      break;
    case 2: // T shape
      piece = [
        [4, 21, 2],
        [5, 21, 2],
        [6, 21, 2],
        [5, 20, 2]
      ];
      break;
    case 3: // L shape
      piece = [
        [4, 22, 3],
        [4, 21, 3],
        [4, 20, 3],
        [5, 22, 3]
      ];
      break;
    case 4: // reverse L shape
      piece = [
        [5, 22, 4],
        [5, 21, 4],
        [5, 20, 4],
        [4, 22, 4]
      ];
      break;
    case 5: // LINE shape
      piece = [
        [5, 23, 5],
        [5, 22, 5],
        [5, 21, 5],
        [5, 20, 5]
      ];
      break;
    case 6: // BLOCK shape
      piece = [
        [4, 21, 6],
        [5, 21, 6],
        [4, 20, 6],
        [5, 20, 6]
      ];
      break;
    default:
      piece = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];
      break;
  }
  return piece;
};

// places a piece on the grid
// note that this mutates the grid array!
export const insertPieceOnGrid = (piece, grid) => {
  piece.forEach(block => {
    grid[block[0]][block[1]] = block[2];
  });

  return grid;
};

// removes a piece from the grid
// note that this mutates the grid array!
export const removePieceFromGrid = (piece, grid) => {
  piece.forEach(block => {
    grid[block[0]][block[1]] = 0;
  });
};

export const movePieceDown = (piece, grid) => {
  removePieceFromGrid(piece, grid);

  let newPos = piece.map((block, index) => {
    return [block[0], block[1] - 1, block[2]];
  });
  insertPieceOnGrid(newPos, grid);
  return newPos;
};

export const findDownwardFacingBlocks = piece => {
  // deep copy the array
  let down = JSON.parse(JSON.stringify(piece));
  let toBeRemoved = [];
  for (let a = 0; a < 4; a++) {
    for (let b = 0; b < 4; b++) {
      if (down[a][1] - 1 === down[b][1] && down[a][0] === down[b][0]) {
        toBeRemoved.push(a);
      }
    }
  }
  // the indices of the entries to be removed will be from small to large,
  // so start from the back so we only change the back and not the front
  // if we did the latter the indices of the rest of the toBeRemoved entries will be incorrect
  for (let i = toBeRemoved.length - 1; i > -1; i--) {
    down.splice(toBeRemoved[i], 1);
  }
  return down;
};

export const findLeftwardFacingBlocks = piece => {
  // deep copy the array
  let left = JSON.parse(JSON.stringify(piece));
  let toBeRemoved = [];
  for (let a = 0; a < 4; a++) {
    for (let b = 0; b < 4; b++) {
      if (left[a][1] === left[b][1] && left[a][0] - 1 === left[b][0]) {
        toBeRemoved.push(a);
      }
    }
  }
  // the indices of the entries to be removed will be from small to large,
  // so start from the back so we only change the back and not the front
  // if we did the latter the indices of the rest of the toBeRemoved entries will be incorrect
  for (let i = toBeRemoved.length - 1; i > -1; i--) {
    left.splice(toBeRemoved[i], 1);
  }
  return left;
};

export const findRightwardFacingBlocks = piece => {
  // deep copy the array
  let right = JSON.parse(JSON.stringify(piece));
  let toBeRemoved = [];
  for (let a = 0; a < 4; a++) {
    for (let b = 0; b < 4; b++) {
      if (right[a][1] === right[b][1] && right[a][0] + 1 === right[b][0]) {
        toBeRemoved.push(a);
      }
    }
  }
  // the indices of the entries to be removed will be from small to large,
  // so start from the back so we only change the back and not the front
  // if we did the latter the indices of the rest of the toBeRemoved entries will be incorrect
  for (let i = toBeRemoved.length - 1; i > -1; i--) {
    right.splice(toBeRemoved[i], 1);
  }
  return right;
};
