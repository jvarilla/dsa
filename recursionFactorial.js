// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) { //O(n) run the function for every element
  if (number === 1) {//end case
  	return number;
  }
  //recursive case
  return number * findFactorialRecursive(number - 1)
}

function findFactorialIterative(number) {//O(n)
	let factorial = 1;
	for(let i = number; i > 0; i--) {
		factorial *= i;
	}
  return factorial;
}

console.time('recursive');
console.log('recrusive', findFactorialRecursive(5)); 
console.timeEnd('recursive')

console.time('iterative');
console.log('iterative:', findFactorialIterative(5));
console.timeEnd('iterative');
