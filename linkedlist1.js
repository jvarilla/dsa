// const basket = ['apples', 'grapes', 'pears']

// linked list: apples --> grapes --> pears

// apples
// 8947 --> grapes
//           8742 --> pears
//                     372 --> null

//JavaScript does not have linked list
//Java does


//POINTER
let obj1 = { A:true};
let obj2 = obj1; //This is a pointer to obj1 not a copy of obj2
obj1.a = 'booya'; //change obj1 should change obj2 bc obj2 points to obj1 in memory
console.log('1', obj1);
console.log('2',obj2);


//Test delete reference
let obj3 = { A:true};
let obj4 = obj3; //This is a pointer to obj1 not a copy of obj2
obj3.a = 'booya'; //change obj1 should change obj2 bc obj2 points to obj1 in memory
delete obj3;
console.log('4',obj4);//Returns original {A:true} bc in JS they don't delete this space if there is still a pointer to it
//At this point {}
obj2 = 'hello';//garbage collector throws out {A:true} bc there are no more pointers to it this is because JS is a garbage-collected language (it's handled automatically)
//Non garbage-collected languages don't delete {A:true} you need to do it yourself, gives you more flexbility but also has some complications with it if you don't do it
//console.log('1', obj1);
console.log('4',obj4); //returns 'hello'