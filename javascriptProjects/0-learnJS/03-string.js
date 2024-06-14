// string objects are immutable(changes are done in copy not is orignal) bcz as we know objects are non primitive and mutable also if we change somthing then original value changed but it doen't affet string objects, string objects always make a copy if there is a change.

const name = "yash"
const surname = "tyagi"

// console.log(name + surname);
// console.log(`My name is ${name} and my surname is ${surname}`);


// declaration of string

const gameName = new String('freefire')
console.log(gameName.__proto__);//object
console.log(gameName.length);//use chrome console to see string operation like bold,trim etc.
// console.log(gameName.toUpperCase());

const newName = gameName.substring(0,4)
console.log(newName);

const anotherName = gameName.slice(-4,8)//we can also provide negative values
console.log(anotherName);


const newString = "   yashtyagi.    "
console.log(newString.trim());//works only on whiteSpace characters.

const url = "https/yash%44tyagi"
console.log(url.replace('%44','-'))


const hWorld = "hello-world"
console.log(hWorld.split('-'));//converted into an array -> [ 'hello', 'world' ]
