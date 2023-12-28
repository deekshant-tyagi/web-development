// Java Script is dynamically typed language . Because data ka type will automatically assigned at the time of compilation.



// there are three keywords in js 
// const, let, var . const is mostly used , cosnt can't be changed. let is also changable and var is also changable but we prefer not to use var because of issue in block scope and functional scope.
let age = 18
console.log(typeof(age));
// type of null is object.
console.log(typeof null);//object
console.log(typeof undefined);//undefined


// ---> Data types in JS --->
/* 1- Primitive 
2- Non primitive

primitive data type [changes will be applied in copy not original]
Number => number
String => string
boolean = > boolean
null => object
undefined => undefined
symbol => symbol
bigint=> bigint

non-primitve data type [changes will be applied in original value]
1-Array => []
2-function => function fun(){ }
3=> object => object {}
*/


// **** memory in JS *********
// Stack[primitive(copy) & Heap[non-primitive(original)]]

// Stack
let name1 = "hello"
let name2 = name1
name2 = "helloWorld"
console.log(name1);// hello
console.log(name2);// helloWorld [original didn't change]


// heap
let user1 = {
    name : "hello",
    email: "hello@123.com"
} 
let user2 = user1
user2.name = "helloWorld"
user2.email = "EJILREJEJFI@gmail"
console.log(user1);//original changed
console.log(user2);//original changed