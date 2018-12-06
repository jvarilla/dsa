//Log all pairs of array
const boxes = ['a','b','c','d','e'];

function logPairs(arr) {
	for (let idx = 0; idx < arr.length -1; idx++) {//O(n)
		for (let pairIdx = idx + 1; pairIdx < arr.length; pairIdx++) {//O(n)
		console.log(arr[idx], arr[pairIdx]);
		}
	}
}
//Nested means use multiplication: O(n * n) = O(n^2)
//O(n^2) Quadratic time
logPairs(boxes);