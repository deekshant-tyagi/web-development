// 1- for of loop

// syntax
// for (const iterator/i of array/string/anything else[not on objects]) {
    
// }

let myArr = [1,2,3,4,5]
for (const i of myArr) {
    // console.log(i);
}

let greetings = "HelloWorld"
for (const greet of greetings) {
    // console.log(greet);
}

const map = new Map()
map.set('IN',"INDIA")
map.set('US',"United State Of America")
map.set('FR',"France")
map.set('IN',"INDIA")//NOT PRINTED , only unique values.Values shouldn't be same. 
console.log(map);


// for (const key of map) { // it gives us array but we want values so we have to de-structure this array
//     console.log(key); 
// }

for (const [key, value] of map) {
    // console.log(key, '-', value); 
}

// for of loop can be used in map but not on objects.



// for in loop
const myObjects = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift for app"
}
for (const key in myObjects) {
//    console.log(`${key} => ${myObjects[key]}`);
}

const prgArr = ["java","java","python","cpp"]
for(const key in prgArr){
    // console.log(`${key} - ${prgArr[key]}`);
}

// we can't access map using for in loop bcz maps aren't iterable

// for each loop [mostly used]

const coding = ["js","java",'c','python']
// using call-back funtion
coding.forEach( function (val) { // as it is a call back function so there is no need to define the name of the funtion.
    console.log(val);
} )

// using arrow - funtion
// coding.forEach( (data) => {console.log(data)} )


// objects in array 
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "rb",
        languageFileName: "ruby"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
    console.log(`${item.languageName} => ${item.languageFileName}`);
} )


// for each loop doesn't return any value.
const myCode = coding.forEach( (item) => {
    // console.log(item);
    return item
} )
// console.log(myCode); //undefined

// <-------- filter -------->
const myNums = [1,2,3,4,5,6,7,8,9,11]
const resultNums = myNums.filter( (num) => {
const resultNums = myNums.filter( (num) => num > 4 )
return num > 4
} )
console.log(resultNums);

// or 

const newNums = []
myNums.forEach( (nums) => {
    if(nums > 4){
        newNums.push(nums)
    }
} )
// console.log(newNums);


const anotherNewNums =  myNums
                            .map( (num) => num*10 )
                            .map( (num) => num+1 )
                            .filter( (num) => num >= 40 )
console.log(anotherNewNums);


// <---------- reduce ->

const myNumbers = [1,2,3,4,5,6,7]
// const myTotal = myNumbers.reduce( (acc , currval) => {
//     console.log(`acc:${acc} current value:${currval}`)
//     return acc + currval;
// },0)

// or

const myTotal = myNumbers.reduce( (acc,currval) => acc + currval ,0) //shorthand
console.log(myTotal);