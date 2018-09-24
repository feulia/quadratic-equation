module.exports = function solveEquation(equation) {
  var int = equation.split(' ');
  var int1 = parseInt(int[0], 10);
  var int2 = parseInt(int[3] + int[4], 10);
  var int3 = parseInt(int[7] + int[8], 10);
  var eq = Math.pow(int2, 2) - 4 * int1 * int3;
  
  var members = [
    (Math.round((int2 * - 1 + Math.sqrt(eq)) / (int1 * 2))),
    (Math.round((int2 * - 1 - Math.sqrt(eq)) / (int1 * 2)))
  ];
  
  return members.sort((a, b) => { a - b });
}
