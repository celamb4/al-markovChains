// load math.js
var math = require('./math.js');

console.log('create a matrix');
var m = math.matrix([[1, 0, 0, 0],
	                  [0.5, 0, 0.5, 0],
										[0, 0.5, 0, 0.5],
										[0, 0, 0, 1]]);
var power = 50;
var m2 = math.matrix([0,1,0,0])
print(m);

function power_matrix (matrix, power){
	return math.pow(matrix, power);
}

var results = (power_matrix(m, power));
print(results);

results = math.multiply(m2, results);
print(results);

function print (value) {
  var precision = 3;
  console.log(math.format(value, precision));
}
