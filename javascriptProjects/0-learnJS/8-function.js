//function in JS.

// function definition
function addTwoNumbers(number1,number2) {
    //                ^function parameters
    console.log(number1 + number2);
}
//[[addTwoNumbers]->func refrence]&[addTwoNumbers(4,4)->function execution]
addTwoNumbers(4,4)
//            ^function arguements


function addThreeNumbers(a,b,c) {
    // let result = a+b+c
    // return result
    return a+b+c
    console.log("return st is the last statement");
}
let result = addThreeNumbers(12,12,12)
//if we dont use return statement then is will show undefined.
console.log("Result of three no is :",result);


function loginusermessage(username = "defaultyash"){
    if(username==undefined){ // if(!username) they are equivalent bcz undefined is considered as false
        console.log("anonymous logged in.");
    }
    else{
       return `${username} just logged in.`
    }
}
console.log(loginusermessage("someone"));


// ... is known as rest as well as spread operation depends on usecase.

function restoperator(...a){
    return a
}
console.log(restoperator(11,22,33,44,55));//[ 11, 22, 33, 44, 55 ]


const myNewArr = [200,400,500,600]
const myNewArr2 = [2000,4000,5000,6000]
function returnArray(getarray){
    return getarray
}
console.log(returnArray(myNewArr)); //[ 200, 400, 500, 600 ]
// console.log(returnArray([1,2,3,4,5]));  //[ 1, 2, 3, 4, 5 ]
// same for objects

const myobj = {
    name: "yash",
    age: 18
}

function returnobj(getobj) {
    return getobj
}
// console.log(returnobj(myobj)); //{ name: 'yash', age: 18 }
console.log(returnobj({
    name: "hello",
    age: 12
}));//{ name: 'hello', age: 12 }