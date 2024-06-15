// objects via two ways 
// 1- constructor method {singleton form}
// Object.create


// 2-object literal

const mySymbol = Symbol("idk...")//declaration of symbol
console.log(Symbol)

const jsUser = {
    name: "yash",
    "fullname": "tyagi",
    age: 18,
    [mySymbol]: "idk143",//if we don't use square brackets then symbol is considered as a string.
    location: "meerut",
    email: "yashtyagi123@",
    workingDays: ["monday","wednesday","friday"]
}
// console.log(jsUser.name);//2nd way
// console.log(jsUser["name"]);//1st way
// console.log(jsUser.fullname);
// console.log(jsUser[mySymbol]);

// Object.freeze(jsUser)//after this statement no changes will be applied.
jsUser.email = "xyz.@hello"//not applied bcz we freeze it.
// console.log(jsUser);

jsUser.greeting = function(){
    console.log(`hello js user ${this.name}`);
}
// console.log(jsUser.greeting());


// 2nd-method -> constructor method
const newUser = new Object()
newUser.name = "dhruv tyagi"
newUser.id = "444"
newUser.isLoggedIn = false
// console.log(newUser); //{ name: 'dhruv tyagi', id: '444', isLoggedIn: false }

const anotherUser = {
    email: "random@gmail.com",
    fullName: {
        userFullName: {  //Nesting is possible.
            firstName: "yash",
            lastName: "tyagi"
        }
    }
}

console.log(anotherUser.fullName.userFullName);//{ firstName: 'yash', lastName: 'tyagi' }


// Object Methods

// -> join method
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = Object.assign({},obj1,obj2)//source,destination
const obj3 = {...obj1, ...obj2}//Same as array.
console.log(obj3);


// key and values
console.log(jsUser);
console.log(Object.keys(jsUser)); // now it is converted into an array now we can traverse it by using loops.
console.log(Object.values(jsUser));
console.log(Object.keys(newUser));
console.log(Object.values(newUser));
console.log(Object.entries(newUser)) //[ [ 'name', 'dhruv tyagi' ], [ 'id', '444' ], [ 'isLoggedIn', false ] ]
console.log(newUser.hasOwnProperty("name")); //true


// Object de-structure
const course = {
    courseName: "jsMastery",
    price: "999",
    courseInstructor: "modi ji"
}
// console.log(course.courseInstructor);
const {courseInstructor : ins} = course //destructuring
console.log(ins)

// API[application programming interface] comes jn the form of ->
// JSON format [java script object notation]
// {
//     name:"hello",
//     world:"new"
// }

// array format
// [
//     {},
//     {},
//     {}
// ]
