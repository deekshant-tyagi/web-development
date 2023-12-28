// {} -> scope
// const a = 100//global scope
// let b = 200
if (true) { //local scope
    const a = 10
    let b = 20
    var c = 30
}
// console.log(a);// a is not defined
// console.log(b);//b is not defined
console.log(c);//30

// c = 300 // var can be changed multiple times
// console.log(c);//300


// SCOPE IN FUNCTIONS

function one() {
    const userName = "yash"
    function two(){
        const friendName = "abhay"
        console.log(userName);//inner funtion can access the scope of outer function.
    }
    // console.log(friendName); //outer function can't access the scope of inner function.
    
    two() // function two is called inside the one funtion

    // IN simple way, CHILD function can access the PARENT funtiion.
}
one()
// two() // two function can only be accessed inside the one funtion.

// SAME WITH IF ELSE CONDITION. 