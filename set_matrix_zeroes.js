/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
  let firstRowFlag = false;
  let firstColFlag = false;
  let rowLength = matrix.length;
  let colLength = matrix[0].length;

  //iterating columns
  for (let row = 0; row < rowLength; row++) {
    if (matrix[row][0] === 0) {
      firstColFlag = true;
      break;
    }
  }
  //iterating rows
  for (let col = 0; col < colLength; col++) {
    if (matrix[0][col] === 0) {
      firstRowFlag = true;
      break;
    }
  }

  //iterate remaining row, find zeroes and set markers
  for (let row = 1; row < rowLength; row++) {
    for (let col = 1; col < colLength; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }
  //set zeroes based on marker
  for (let row = 1; row < rowLength; row++) {
    for (let col = 1; col < colLength; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }
  //set 1st row and column to zeroes based on flag
  if (firstColFlag) {
    for (let row = 0; row < rowLength; row++) matrix[row][0] = 0;
  }

  if (firstRowFlag) {
    for (let col = 0; col < colLength; col++) matrix[0][col] = 0;
  }

  return matrix;
};

console.table(
  setZeroes([
    [0, 0, 0, 5],
    [4, 3, 1, 4],
    [0, 1, 1, 4],
    [1, 2, 1, 3],
    [0, 0, 1, 1],
  ])
);
