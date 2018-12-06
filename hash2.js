//Google Question
const assert = require('assert');
function firstRecurringCharacter(input) {
	//Check input
	if(!input.length) {//See if it isn't an array and just return the character
		return input;
	}

	if(input.length < 2) {//if only one item in array return undefined bc there is no reoccurance
		return undefined;
	}

	let charHashMap = {};//Adds to space O(n) space complexity

	for(let charIdx = 0; charIdx < input.length; charIdx++) {//O(n) Exchange time for space
		let charItem = input[charIdx];
		if(!charHashMap[charItem]) {//if it doesn't yet exist in map
			charHashMap[charItem] = true;
		} else {//it does exist already in that case return the char
			return charItem;
		}
	}
	return undefined; //if no reoccurence is found

}

console.log(firstRecurringCharacter([]));
console.log(firstRecurringCharacter(1));
console.log(firstRecurringCharacter("jolo"));

//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2
it('should return 5s', () => {
	assert.equal(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]), 2)
})

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1
console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]));

// //Given an array = [2,3,4,5]:
// //It should return undefined
console.log(firstRecurringCharacter([2,3,4,5]));

// //Bonus... What if we had this:
// // [2,5,5,2,3,5,1,2,4]
// // return 5 because the pairs are before 2,2
console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]));


// // [2,5,5,2,3,5,1,2,4] -> 5
///Andrei solution --> Time Complexity for space complexity
function firstRecurringCharacter2(input) {
	let map = {};
	for (let i = 0; i < input.length; i++) {
		if(map[input[i]] !== undefined) {//if it exists already in map return it bc it reoccurred
			return input[i];
		} else {//otherwise add it to the map
			map[input[i]] = i;
		}
	}
	return undefined;
}

// // [2,5,5,2,3,5,1,2,4] - > 2 bc of how it counts
//Less Space more Time
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if(input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined
}


function firstRecurringCharacter3(input) {//Fixed to show 5 first
  const inputLength = input.length;
  let smallestRecurIdx = inputLength;
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if( (input[i] === input[j]) && j < smallestRecurIdx) {
        smallestRecurIdx = j;
      }
    }
  }
  return smallestRecurIdx === inputLength ? undefined : input[smallestRecurIdx];
}
console.log(firstRecurringCharacter3([2,5,5,2,3,5,1,2,4]));