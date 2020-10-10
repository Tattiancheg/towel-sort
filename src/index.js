
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix)) 
  return [];

  var matr = [];

  for (var i=0; i<matrix.length; i++) {
    if (i % 2 === 0) { 
      matr = matr.concat(matrix[i]);
    }  else 
      matr = matr.concat(matrix[i].reverse(''));
}
return matr
}
