// CONTROL FLOW IN JS.

age = 18
if (age>=18) {
    console.log("you can vote");
}
else{
    console.log("you can't vote");
}

// operators -> < , > , <= , >= , == , != , ===(strict equality)

if(2 ==='2'){ // if we use == then this condition is considered as true.
    console.log("Executed");
}
else{
    console.log("Not Executed");
}

// else if (condition) {
    // else if is also used to check multiple condition.
// }

const daysName = 4
switch (daysName) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;

    default:
        console.log("dafaultCaseMatch");
        break;
}

// <----- TRUTHY AND FALSY VALUES ---------->

// FALSY VALUES
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//TRUTHY VALUES [imp]
// "0", "false", " ", {}, [], function(){}


// Nullish Coalescing Operator (??): null undefined
// generally used to handle unexpected values.
val1 = 5 ?? 10
val1 = null ?? 11
val1 = 44 ?? undefined
console.log(val1);

// Ternary Operator
// condition ? true : false

const price = 100
price <= 80 ? console.log("Less") : console.log("Greater");