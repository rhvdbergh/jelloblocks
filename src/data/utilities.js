export const selectNextColor = () => {
  return Math.floor(Math.random() * 7);
};

export const constructPiece = color => {
  switch (color) {
    case 0: // S shape
      return [
        [22, 4],
        [21, 4],
        [21, 5],
        [20, 6]
      ];
      break;
    case 1: // Z shape
      return [
        [22, 5],
        [21, 4],
        [21, 5],
        [20, 4]
      ];
      break;
    case 2: // T shape
      return [
        [21, 4],
        [21, 5],
        [21, 6],
        [22, 5]
      ];
      break;
    case 3: // L shape
      return [
        [22, 4],
        [21, 4],
        [20, 4],
        [20, 5]
      ];
      break;
    case 4: // reverse L shape
      return [
        [22, 5],
        [21, 5],
        [20, 5],
        [20, 4]
      ];
      break;
    case 5: // LINE shape
      return [
        [23, 5],
        [22, 5],
        [21, 5],
        [20, 5]
      ];
      break;
    case 6: // BLOCK shape
      return [
        [21, 4],
        [21, 5],
        [20, 4],
        [20, 5]
      ];
      break;
    default:
      return [];
  }
};
