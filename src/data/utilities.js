export const selectNextColor = () => {
  return Math.floor(Math.random() * 7);
};

export const constructPiece = color => {
  switch (color) {
    case 0: // S shape
      return [
        [4, 22],
        [4, 21],
        [5, 21],
        [6, 20]
      ];
      break;
    case 1: // Z shape
      return [
        [5, 22],
        [4, 21],
        [5, 21],
        [4, 21]
      ];
      break;
    case 2: // T shape
      return [
        [4, 21],
        [5, 21],
        [6, 21],
        [5, 22]
      ];
      break;
    case 3: // L shape
      return [
        [4, 22],
        [4, 21],
        [4, 20],
        [5, 20]
      ];
      break;
    case 4: // reverse L shape
      return [
        [5, 22],
        [5, 21],
        [5, 20],
        [4, 20]
      ];
      break;
    case 5: // LINE shape
      return [
        [5, 23],
        [5, 22],
        [5, 21],
        [5, 20]
      ];
      break;
    case 6: // BLOCK shape
      return [
        [4, 21],
        [5, 21],
        [4, 20],
        [5, 20]
      ];
      break;
    default:
      return [];
  }
};

// places a piece on the grid
export const insertPieceOnGrid = (piece, grid) => {
  console.log('piece', piece);
  let newGrid = grid;
  piece.forEach(block => {
    newGrid[block[0]][block[1]] = 1;
  });

  return newGrid;
};
