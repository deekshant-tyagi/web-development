// global object of browser is -> window // when we use this keyword
//  this -> current context

const user = {
    userName: "hello",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName} , welcome to hello world`); // if we don't use this keyword then we got an error [username is not defined] , this keyword refers to current context.
        
        // console.log(this); // whole object printed.
    }
}
user.welcomeMessage()
user.userName = "yash"
user.welcomeMessage()

// console.log(this); // {}

function hello() {
    let userName = "helloWorld"
    // console.log(this.userName);//undefined
}
hello()


// <---- Arrow Function ------>
//      () => {}

const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)
// const addTwo = (num1,num2) => {return num1 + num2}
// const addTwo = (num1,num2) => ({return num1 + num2})

// implicit return to implicitly return an object make sure to wrap it in parenthesis

// {} if we use curly braces then we have to use return statement ,  () if we use parenthesis then no need to use return statment.

console.log("Addition of two no is : ",addTwo(12,12));

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log("Addition of two no is : ",addTwo(12,12));


// <------- IIFE [Immediately Invoked Function Expression] ----->
// ()()

( () => { // UNNAMED IIFE
    console.log(`DB DISCONNECTED`);
})();  //SEMICOLON IS NECESSARY, WHEN WE USE TWO IIFE.


(function kuchbhi(name) { //NAMED IIFE
    console.log(`DB CONNECTED TO ${name}`);
})("SERVER")


// <------------ Javascript Execution Context & call stack ------->
/*
1- Global Execution Context
2- function Execution Context
3- Eval Execution context

<---- phases ->
1-Memory Creation Phase
2-Execution Phase
 */


//  <---------Call Stack ----->
// call stack is like a normal stack which follow the lifo property.


// <------ STEPS --------->
/*
1.JS creates Global Execution Context
2.next it creates memory phase
3.Memory phase - in this phase , the variable are set to undefined , until the execution phase(next phase) and the funtions are set to their definitions.
4.Next it creates the execution phase
5.Execution phase - In this phase , the variables are intitialised to given values and when the funtions are called , it creates a memory phase and execution phase for the funtion just like the main one
6-Returned value is passed to the global environment.
  Execution Context gets deleted as well.
 */