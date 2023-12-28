const score = 444
// console.log(score);

// Explicitly defining a number.
const balance = new Number(444)
// console.log(balance);//use chrome to see number operation.
// console.log(balance.toFixed(2));//444.00

const newNumb = 444.64532
console.log(newNumb.toPrecision(3));

let newNumb2 = 100000000000000
// console.log(newNumb2.toLocaleString('en-IN'));//10,00,00,00,00,00,000


// <---- Maths   ----->

console.log(Math)
console.log(Math.round(4.97))//5
console.log(Math.sqrt(4))//2
console.log(Math.max(4,2,3,4,4,6,6,7,343,333))//343


console.log(Math.random())//gives random value b/w 0 to 1
console.log((Math.random()*10)+1)//for values from 1 t0 10 (+1 is used to avoid zero)


const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min +1)+min));//max-min+1 = 9