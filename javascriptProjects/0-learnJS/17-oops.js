// Object Oriented Programming.

// we can't use arrow function as a constructor.
//  Constructor function[to make constructor function we have to define with first upperCase letter its a convention, to call constructor funtion we have to use new keyword] and the new operator
// Call function using new keyword
// "this" = {object}
// function automaticall return object

// let Car =  function(color,model){
//     this.color = color;
//     this.model = model
// }

// let result = new Car("black",3333)
// console.log(result)

// Prototype method -> Each obj created by constructor fun have an access to all methods present inside that constructor func..
// console.log(result,__proto__)

// Car.prototype.startEngine = function(){
    // console.log("Starting Enginee");
// }
// result.startEngine() // result also have an access

// Above is traditional way.


// ES6 Classes -> It is a updated way which implement prototypical inheritace behind the scenes.

// class declaration
// classes are not hoisted 
// classes are executed in strict mode.

class Car {
    constructor (color,model){
        this.colorOfCar = color
        this.modelOfCar = model
    }
    strtEng(){
        console.log("Starting the Engine")
    }
}
let resCar = new Car("huxuki",444);
console.log(resCar)
resCar.strtEng()