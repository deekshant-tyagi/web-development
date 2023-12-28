// Dates

let myDate = new Date
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

let myCreatedDate = new Date(2023,0,9,4,5)
console.log(myCreatedDate.toLocaleString());


let currentTime = Date.now()//by default it give time in mili seconds
console.log(Math.floor(Date.now()/1000)); //current time in seconds


let newDate = new Date
console.log(newDate.getDay());