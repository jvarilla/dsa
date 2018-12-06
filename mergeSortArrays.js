//Given 2 sorted arrays merge them in order

//MY SOLUTION
function mergeSortedArrays(arr1,arr2) {//O(n)
	//Check if arr1 length > 2
	if (arr2.length && arr1 == [] || arr1 == undefined) {
		return arr2;
	}
	if (arr1.length && arr2 == [] || arr2 == undefined) {
		return arr1;
	}
	if (!arr1.length) {
		arr1 = [arr1]
	};
	if (!arr2.length) {
		arr2 = [arr2]
	};
	return [...arr1, ...arr2].sort((a,b) =>   a - b);
}


console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));
console.log(mergeSortedArrays([], [3,4,6,30]));
console.log(mergeSortedArrays([], []));
console.log(mergeSortedArrays([], 1));
console.log(mergeSortedArrays(1, []));

//ANDREI SOLUTION
function mergeSortedArrays2(arr1, arr2) {
	const mergedArray = [];
	let arr1Item = arr1[0];
	let arr2Item = arr2[0];
	let i = 1;
	let j = 1;
	//Check input
	if (arr1.length === 0) {
		return arr2;
	}

	if(arr2.length === 0) {
		return arr1
	}

	while (arr1Item || arr2Item) {
		if(!arr2Item || arr1Item < arr2Item) {
			mergedArray.push(arr1Item);
			arr1Item = arr1[i];
			i++;
		} else {
			mergedArray.push(arr1Item);
			arr2Item = arr2[j];
			j++;
		}
	}

	return mergedArray;
}

console.log(mergeSortedArrays2([0,3,4,31], [3,4,6,30]));
console.log(mergeSortedArrays2([], [3,4,6,30]));
console.log(mergeSortedArrays2([], []));
console.log(mergeSortedArrays2([], 1));
console.log(mergeSortedArrays2(1, []));