// Imp Concepts.

// IIFE (Immediately Invoked Function Expression)
// ()() 


(function (name){
    console.log("This func will never execute again -",name);
})("IIFE")

// setTimeOut and setInterval 

// setTimeOut -> Run function 'once' after interval of time.

// setTimeout((data) => {
    // console.log(`Welcome ${data} to JS`)
// }, 5000,"yash");


// function intro(data){
    // console.log(`Welcome ${data} to JS`)
// }
// setTimeout(intro,3000,"dhruv"); //2nd way

// setInterval->Run funtion repeatedly,Start after the interval of time , then repeating...

// setInterval((data2) => {
//     console.log(`Welcome ${data2} to JS`)
// }, 5000,"abhay"); // repeatedly printing after 5sec.



// Hoisting
// var -> variable declaration are hoisted toward top of their Scope.
// var are declared on the top of scope , only var not let and const.

test = "xtreme var"

// console.log(test);
var test;


hello();
function hello(){
    // console.log("hello JS")
}


// Function vs Methods
// Method -> it is nothing but object holding function as a value, or function inside the object

let ageCal = {
    ageCalculate: (birthyear)=>{
        let age =  2023 - birthyear
        return age;
    }
}
// console.log(`Current age is ${ageCal.ageCalculate(2005)}`);


//  this keyword ? -> refers to current context.


// forEach -> it is ued to traverse over the array.
let games = ["freeFire","Pubg","asphalt"];
games.forEach(function(element){
    // console.log(element)
})


// Bind Method/function in JS

function greet(){
    // console.log(`Welcome ${this.firstName} ${this.lastName} to India`)
}

greet();// at this time this gets undefined

let user ={
    firstName:"Salmon",
    lastName:"Bhoii"
}

let newGreet = greet.bind(user)
newGreet(); //we bind the greet with user now this gets its correct values.


// pass by ref & pass by value
// pass by ref -> original value also changes , pass by value->changes are applied on copy.
let arr = [1,2,3,4,5]
let refArr = arr;
refArr[2] = 66
// console.log(arr)
// console.log(refArr)


// innerText and innerHTML 
// innerText -> gives pure text content (also ignores space only text will show on screen) while innerHTML -> giver text content with tags


// Getting and Setting Attribute
// get -> (reading purpose) set->(writing purpose)
// let hllo = document.querySelector('a');
// hllo.getAttribute('href') & hllo.setAttribute('href',"@exampleLink1234")

// Add, Remove , and Replace class of element.
// let heading = document.querySelector('h1');
// heading.classList.add('hide') 
// heading.classList.remove('hide') 
// heading.classList.replace('hide','unhide')


// parent , child , sibling
// .parentElement , .nextElementSibling or .prevElementSibling ,   .parentElement


// create and remove element
// .createElement 
// let li =  document.createElement('li')
// li.textContent = "something new added";
// ul.append(li)


// filter map and reduce.
//  map Method -> create new array from original array by applying Tranformation function.
let salaries  = [3000,5000,7000,8000]
let newSalaries = salaries.map(salary => {
    let incSalary = salary/2;
    return incSalary + salary
})
// console.log(newSalaries)

// Filter -> used to perform filteration based on certain condition on Array , it also return new array

// Reduce -> It return single value , it also make a copy or return a new array.
// array.reduce(function(total,currentValue),initialValue[mostly 0]) , it does not mutate original array.
let newArr = [1,2,3,4,5,6,7]
let tempArr = newArr.reduce((total,currentVal)=>{
    return total + currentVal;
},0)
// console.log(tempArr);//28


// some and every -> works like && or ||
// some -> return "true" if any array element pass the test.
// every -> return "true" if all array element pass the test.

