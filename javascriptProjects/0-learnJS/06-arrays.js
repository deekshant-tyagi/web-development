// Arrays
const arr = [1, 2, 3, 4, 5]
console.log(arr); //[ 1, 2, 3, 4, 5 ]

// arrays are resizable in javascript. array can contain no and string aswell.

const movie = ["dhoom3","krish3"]
console.log(movie);//[ 'dhoom3', 'krish3' ]


// explicitly defining an array.
const arr2 = new Array(1,2,3,4,5)
console.log(arr2);


// <---- Array Methods ---->
arr.push(12)
arr.push(14)
// console.log(arr)
arr.pop()
arr.unshift(11)//put at first  11, 1,  2, 3, 4, 5, 12 [not so convinent]
console.log(arr);
// console.log(arr.includes(22)); //false


const newarr = arr.join()//convert array into string
console.log(newarr);
console.log(typeof newarr);//string

//  Slice and Splice in js
console.log("A ",arr);
const tempArr = arr.slice(0,3)//last range is excluded
console.log("B",tempArr);



// now splice {slice and splice wroks same } but. Generally splice method is used to perform insertion,deletion and updation.
const tempArr2 = arr.splice(0,3)
console.log("c",tempArr2);


const arrhello = ["hello","world","i","am","here"]
const arrWorld = ["to","code","in","dsa"]

// arrhello.push(arrWorld)
// console.log(arrhello);//push operation  push in existing array.

// const all = arrhello.concat(arrWorld)//concat return new array
// console.log(all);

const allArr = [...arrhello, ...arrWorld]
console.log(allArr);

const anotherArray = [1,2,3,[4,5],6,7,[8,9,[1,2,3],4,5]]
const realArray = anotherArray.flat(Infinity)
console.log(realArray); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5 ]

// Array.isArray to check array , Array.from("hello") to convert it into array.
