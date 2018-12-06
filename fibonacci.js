function fibonacciIterative(n){
  //code here;
  if (n === 0) {
  	return 0;
  } else if(n == 1) {
  	return 1;
  }

  let evenVal = 0;
  let oddVal = 1;

  for(let fibIdx  = 2; fibIdx <= n; fibIdx++){
  	if (fibIdx % 2 === 0) {//if even
  		evenVal = oddVal + evenVal;
  		if (fibIdx === n) {
  			return evenVal;
  		} else {//if odd
  			oddVal = evenVal + oddVal;
  			if (fibIdx === n) {
  				return oddVal;
  			}
  		}
  	}
  }
}
console.log('iterative', fibonacciIterative(12));


function fibonacciRecursive(n) {
  //code here;
  if(n === 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }

  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log('iterative', fibonacciRecursive(12));