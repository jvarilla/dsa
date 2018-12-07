//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  const leftPointer = 0;
  const rightPointer = str.length;
  if (str === '' || str.length < 2) {
    return '';
  }
  console.log(str);
  return str[rightPointer - 1] + reverseString(str.substring(leftPointer + 1, rightPointer -1)) + str[leftPointer];
}

console.log(reverseString('yoyo mastery'));

console.log(reverseString('yoyomastery'));
//should return: 'retsam oyoy'